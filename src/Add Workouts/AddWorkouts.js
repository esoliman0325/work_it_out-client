import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './AddWorkouts.css';
import Calendar from '../Calendar/Calendar';
import WorkoutsContext from '../WorkoutsContext';
// import STORE from '../../STORE';

class AddWorkouts extends Component {
constructor() {
  super();
  this.state = {
    error: '' 
  }
}

  handleSubmit = e => {
    e.preventDefault()
    const { bodyPart, exercise, sets, reps, weight } = e.target
    const workout = {
      bodyPart: bodyPart.value,
      exercise: exercise.value,
      sets: sets.value,
      reps: reps.value,
      weight: weight.value
    }

    fetch('https://localhost:8000/addworkout', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'content-type': 'application/json'
      }
    })

    .then(res => {
      if (!res.ok) {
        throw new Error('Oops, something went wrong. Please try again.')
      }
      return res.json()
    })
    .then(postedWorkout => {
      WorkoutsContext.addWorkout(postedWorkout)
    })
    .catch(err => {
      console.log(err)
      this.setState({
        error: err.message
      })
    })
  }

  render() {
    const displayError = (this.state.error) ? <div>{this.state.error}</div> : '';
  	return (
			<div>
				<Calendar />
        {displayError}
				<form className='addworkout_form' onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='body part'>Body Part:</label>
          <input
            type='text'
            name='body part'
            id='body part'
            placeholder='Chest'
            // value={this.state.title}
						// onChange={e => this.titleChanged(e.target.value)}
						/>
          <label htmlFor='exercise'>Exercise:</label>  
          <input
            type='text'
            name='exercise'
            id='exercise'
            placeholder='url'
            // value={this.state.url}
            // onChange={e => this.urlChanged(e.target.value)}
						/>
          <label htmlFor='sets'>Sets:</label>  
          <input
						type='number'
            name='sets'
            id='sets'
            // value={this.state.description}
						// onChange={e => this.descriptionChanged(e.target.value)}
						/>
          <label htmlFor='reps'>Reps: </label>
          <input
            type='number'
            name='reps'
            id='reps'
            // value={this.state.rating}
            // onChange={e => this.ratingChanged(e.target.value)}
						/>
          <label htmlFor='reps'>Weight: </label>
          <input
            type='number'
            name='weight'
            id='weight'
            // value={this.state.rating}
            // onChange={e => this.ratingChanged(e.target.value)}
						/>
        </form>
			</div>
  	)
	}
}

export default AddWorkouts;