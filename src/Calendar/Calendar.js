import React, { Component } from "react";
// import { render } from "react-dom";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
// import events from '../events';
import * as dates from '../../src/utils/dates';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'
import WorkoutsContext from "../WorkoutsContext";
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

// var date = new Date();
// date.setDate( date.getDate() - 6 );

let d = new Date();

// to bring date back to sept to load sept data...for testing will not use in prod 
let sept = new Date(d.setDate(d.getDate()-20));
d = sept 

var firstDay = (new Date(d.getFullYear(), d.getMonth(), 1)).toISOString();
var lastDay = (new Date(d.getFullYear(), d.getMonth() + 1, 0)).toISOString();
// let events = [];

class ReactCalendar extends Component {

  static contextType = WorkoutsContext;

  state = {
    view: "month",
    date: new Date(),
    width: 500,
    height: 500,
  }

  handleSelect = rawDate => {
    let selectedDate = rawDate.toISOString()
    console.log(selectedDate, 'hiii')
    this.context.updateDate(selectedDate)
  }

  handleEventsWorkouts = (newEventsWorkouts) => {
    this.context.updateEvents(newEventsWorkouts[0])
    this.context.updateWorkouts(newEventsWorkouts[1])
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: 500,
        height: 500
      });
    });
    
    console.log(firstDay, lastDay)

 
    fetch(`http://localhost:8000/viewworkouts/${firstDay}/${lastDay}`,  {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response, 'array') 
        let newEvents = response.body.map(res => { 
          let returnedBody = {
            id: res.id,
            title: res.body_part,
            start: res.date,
            end: res.date
          }
          return returnedBody
        })

        let newWorkouts = response.all.map(workout => { 
          let returnedWorkouts = {
            id: workout.body_id,
            title: workout.body_part,
            start: workout.date,
            end: workout.date,
            exercises: {
              exercise: workout.exercise,
              sets: workout.sets,
              reps: workout.reps,
              weight: workout.weight,
              workoutId: workout.workoutId,
              workoutBodyIdRef: workout.body_id_reference
            }
          }
          return returnedWorkouts
        })
          let newEventsWorkouts = [newEvents, newWorkouts]

        return newEventsWorkouts
      })
      .then((newEventsWorkouts) => this.handleEventsWorkouts(newEventsWorkouts))
}

// hightlightDay = (end) => {
//   console.log(end)
//   if (end) {
//     let style = {
//       backgroundColor: 'purple'
//     }
//   return {style: style}
//   } 
// }

  render() {
    return (
      <div className='calendar-container' style={{ height: 500, width: 1000 }}>
          <Calendar
            events={this.context.events}
            views = {['month']}
            height={this.state.height}
            step={60}
            date={this.state.date}
            onNavigate={date => this.setState({ date })}
            selectable
            eventPropGetter={event => ({className: 'title-' + event.title.toLowerCase()})}
            // dayPropGetter={end => this.hightlightDay(end)}
            onSelectSlot={(rawDate) => this.handleSelect(rawDate.end)}
            showMultiDayTimes
            max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
            defaultDate={new Date()}
            components={{
              timeSlotWrapper: ColoredDateCellWrapper,
            }}
            localizer={localizer}
          />
      </div>
    )
  }
}

export default ReactCalendar;