import React, { Component } from "react";
// import { render } from "react-dom";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
// import events from '../events';
import * as dates from '../../src/utils/dates';
import 'react-big-calendar/lib/css/react-big-calendar.css';
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

let d = new Date();
var firstDay = (new Date(d.getFullYear(), d.getMonth(), 1)).toISOString();
var lastDay = (new Date(d.getFullYear(), d.getMonth() + 1, 0)).toISOString();
let events = [];

class ReactCalendar extends Component {

  static contextType = WorkoutsContext;

  state = {
    view: "month",
    date: new Date(),
    width: 500,
    height: 500,
  }

  handleSelect = rawDate => {
    let selectedDate = rawDate.toISOString().slice(0, 10)
    this.context.updateDate(selectedDate)
  }

  handleWorkouts = workouts => {
    this.context.updateWorkouts(workouts)
  }

  componentDidMount() {
    // window.addEventListener("resize", () => {
    //   this.setState({
    //     width: 500,
    //     height: 500
    //   });
    // });
    
    console.log(firstDay.slice(0, 10), lastDay.slice(0, 10))

 
    fetch(`http://localhost:8000/viewworkouts/${firstDay}/${lastDay}`,  {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
      .then(res => res.json())
      .then(function(workouts)  { 
        let new_workouts = workouts.map(workout => { 
          let returnedWorkouts = {
            id: workout.id,
            title: workout.body_part,
            start: new Date(workout.date),
            end: new Date(workout.date),
            exercises: {
              exercise: workout.exercise,
              sets: workout.sets,
              reps: workout.reps,
              weight: workout.weight
            }
          }
          return returnedWorkouts
        })
        events = new_workouts;
        // console.log(events, 'workouts')
        return events
      })
      .then(events => this.handleWorkouts(events))

      // console.log(this.state.newWorkouts, 'hi')
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

      <div style={{ height: 500, width: 1000 }}>
          <Calendar
            events={events}
            views={allViews}
            height={this.state.height}
            step={60}
            date={this.state.date}
            onNavigate={date => this.setState({ date })}
            selectable
            onSelectSlot={(rawDate) => this.handleSelect(rawDate.end)}
            showMultiDayTimes
            max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
            defaultDate={new Date(2015, 3, 1)}
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