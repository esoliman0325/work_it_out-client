// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import CalendarDay from '../Calendar Day/CalendarDay';
// import { months } from '../DATESTORE';
// // import ViewWorkoutByDate from '../View Workout By Date/ViewWorkoutByDate';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/sass/styles';
// import 'react-big-calendar/addons/dragAndDrop/styles';
// import './Calendar.css';
// // import STORE from '../../STORE';

import React, { Component } from "react";
import { render } from "react-dom";
import { momentLocalizer } from 'react-big-calendar';
import BigCalendar from "react-big-calendar-like-google";
import moment from 'moment';
import events from '../events';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";

moment.locale("en");
BigCalendar.momentLocalizer(moment);



const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class ReactCalendar extends Component {
  state = {
    view: "month",
    date: new Date(),
    width: 500
  };

  componentDidMount() {
    // window.addEventListener("resize", () => {
    //   this.setState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   });
    // });
  }

  render() {
    return (
      <div style={{ height: 700 }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "month" })}>Month</button>
        <BigCalendar
					getNow={() => new Date()}
					events={events}
          style={{ height: 500, width: this.state.width }}
          toolbar={false}
          step={60}
          views={allViews}
          view={this.state.view}
          onView={() => {}}
          date={this.state.date}
					onNavigate={date => this.setState({ date })}
					startAccessor="start"
					endAccessor="end"
        />
      </div>
    );
  }
}

export default ReactCalendar;

// import React from 'react'

// import events from '../events'
// import * as dates from '../../src/utils/dates'

// let allViews = Object.keys(Views).map(k => Views[k])

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   })

// let Basic = ({ localizer }) => (
//   <Calendar
//     events={events}
//     views={allViews}
//     step={60}
//     showMultiDayTimes
//     max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
//     defaultDate={new Date(2015, 3, 1)}
//     components={{
//       timeSlotWrapper: ColoredDateCellWrapper,
//     }}
//     localizer={localizer}
//   />
// )

// export default Basic
