import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import './AddWorkouts.css';
// import MyCalendar from '../Calendar/Calendar';
import ReactCalendar from '../Calendar/Calendar';
import WorkoutsContext from '../WorkoutsContext';
// import STORE from '../../STORE';

class AddWorkouts extends Component {
  static contextType = WorkoutsContext;

  constructor() {
    super();
    this.state = {
      bodypart: '',
      exercise: '',
      sets: '',
      reps: '',
      weight: ''
    }
  }

  bodyPartChanged(bodypart) {
    this.setState({
      bodypart
    })
  }

  exerciseChanged(exercise) {
    this.setState({
      exercise
    })
  }

  setsChanged(sets) {
    this.setState({
      sets
    })
  }

  repsChanged(reps) {
    this.setState({
      reps
    })
  }

  weightChanged(weight) {
    this.setState({
      weight
    })
  }

  datePosted(date) {
    this.setState({
      date
    })
  }

  postedStatus(posted)  {
    this.setState({
      posted
    })
  }

  handlePostedWorkoutEvent = postedWorkoutEvent => {
    this.context.addWorkout(postedWorkoutEvent[0])
    this.context.addEvent(postedWorkoutEvent[1])
  }
  
  handleSubmit = e => {
    e.preventDefault()

    const { bodypart, exercise, sets, reps, weight } = this.state;
    let workout = {
      body_part: bodypart,
      exercise: exercise,
      sets: sets,
      reps: reps,
      weight: weight,
      date: this.context.selectedDate
    }

  fetch('http://localhost:8000/addworkouts', {
    method: 'POST',
    body: JSON.stringify(workout),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Oops, something went wrong with posting your workout. Please try again.')
      }
      return res.json()
    })
    .then(post => {
      let workout = post[0]
      let postedWorkout = {
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

      let postedEvent = {
          id: workout.body_id,
          title: workout.body_part,
          start: workout.date,
          end: workout.date
      }

      let postedWorkoutEvent = [postedWorkout, postedEvent]
      return postedWorkoutEvent
    })
    .then(postedWorkoutEvent => this.handlePostedWorkoutEvent(postedWorkoutEvent))
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    // const displayError = (this.state.error) ? <div>{this.state.error}</div> : ''
    // const displayPostedMessage = (this.state.posted) ? <div>Congrats, your entry has posted!</div> : ''

  	return (
			<div>
				<ReactCalendar />
        {/* {displayError}
        {displayPostedMessage} */}
				<form className='addworkout_form' onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='body part'>Body Part:</label>
          <input
            type='text'
            name='bodypart'
            id='bodypart'
            placeholder='Chest'
            value={this.state.bodyPart}
						onChange={e => this.bodyPartChanged(e.target.value)}
						/>
          <label htmlFor='exercise'>Exercise:</label>  
          <input
            type='text'
            name='exercise'
            id='exercise'
            placeholder='url'
            value={this.state.exercise}
            onChange={e => this.exerciseChanged(e.target.value)}
						/>
          <label htmlFor='sets'>Sets:</label>  
          <input
						type='number'
            name='sets'
            id='sets'
            value={this.state.sets}
						onChange={e => this.setsChanged(e.target.value)}
						/>
          <label htmlFor='reps'>Reps: </label>
          <input
            type='number'
            name='reps'
            id='reps'
            value={this.state.reps}
            onChange={e => this.repsChanged(e.target.value)}
						/>
          <label htmlFor='reps'>Weight: </label>
          <input
            type='number'
            name='weight'
            id='weight'
            value={this.state.weight}
            onChange={e => this.weightChanged(e.target.value)}
						/>
            <input type ='submit'/>
        </form>
			</div>
  	)
	}
}
export default AddWorkouts;