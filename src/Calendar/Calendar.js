// import React, { Component } from 'react';
// import BigCalendar from 'react-big-calendar'
// import events from '../events';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import * as jquery from "jquery";

// // Setup the localizer by providing the moment (or globalize) Object
// // to the correct localizer.
// const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// class MyCalendar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: new Date()
//     }
//   }



//   render() {
//     return (
//         <div>
//           <div style={{height: 700}}>
//           <BigCalendar
//             date={this.state.date}
//             onNavigate={date => this.setState({ date })}
//             style={{height: 400, width: 600}}
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//           />
//           </div>
//         </div>
//     )
//   }
// }

// export default MyCalendar;

import React, { Component } from "react";
// import { render } from "react-dom";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import events from '../events';
import * as dates from '../../src/utils/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import WorkoutsContext from '../WorkoutsContext';

moment.locale("en");

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const localizer = momentLocalizer(moment);

class ReactCalendar extends Component {
  state = {
    view: "month",
    date: new Date(),
    width: 500
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  }

  handleFetch = date =>  {
    // make sure correct date prints
    console.log(date);
    WorkoutsContext.updateDate(date);


    fetch(`http://localhost:8000/viewworkouts?${date}`,  {
		method: 'GET',
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			}
	})
    .then(res => res.text())
    .then(res => console.log(res))
    .then(res => {
      if(!res.ok) {
        throw new Error ('Something went wrong. Please try again.')
      }
      return res.json()
    })
    .then(workouts => {
      WorkoutsContext.updateWorkout(workouts)
    })
    .catch(err => console.log(err))
    .then(data => {
      console.log(data)
    });
  }

  render() {
    return (
      <div>
<Calendar
    events={events}
    views={allViews}
    step={60}
    date={this.state.date}
    onNavigate={date => this.setState({ date })}
    selectable
    onSelectSlot={date => this.handleFetch(date)}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2015, 3, 1)}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
  />
    </div>
    );
  }
}

export default ReactCalendar;