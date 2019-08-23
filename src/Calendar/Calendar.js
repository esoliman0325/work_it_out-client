import React, { Component } from "react";
// import { render } from "react-dom";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import events from '../events';
import * as dates from '../../src/utils/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import WorkoutsContext from '../WorkoutsContext';

moment.locale("en");

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const localizer = momentLocalizer(moment);

let dateConversionStore = [];
// using as ex.; date will be populated via onselectslot
let d = new Date();

dateConversionStore.push(d.getFullYear().toString());
dateConversionStore.push((d.getMonth() + 1).toString());
dateConversionStore.push(d.getDate().toString());

let convertedDate = dateConversionStore.join('-');
console.log(convertedDate)

// update shared date state via context
// WorkoutsContext.updateDate(convertedDate);

class ReactCalendar extends Component {
  state = {
    view: "month",
    date: new Date(),
    width: 500
  }

  componentDidMount() {
    // window.addEventListener("resize", () => {
    //   this.setState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   });
    // });
  

    // handleFetch = rawDate => {
    let today = '2019-08-22'
    console.log(today)
    fetch(`http://localhost:8000/viewworkouts/${today}`,  {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
      .then(res => res.json())
      .then(workouts => console.log(workouts))
      // .then(res => console.log(res))
      // .then(res => {
      //   if(!res.ok) {
      //     throw new Error ('Something went wrong. Please try again.')
      //   }
      //   return res.json()
      // })
      // .then(workouts => {
      //   WorkoutsContext.updateWorkout(workouts)
      // })
      // .catch(err => console.log(err));
    // }
  // }
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
          onSelectSlot={rawDate => this.handleFetch(rawDate)}
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