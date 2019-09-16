import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import WorkoutsContext from '../WorkoutsContext';
import './ViewWorkouts.css';
// import Basic from '../Calendar/Calendar';
// import ReactCalendar from '../Calendar/Calendar';
import ReactCalendar from '../Calendar/Calendar';
import WorkoutsContext from '../WorkoutsContext';
// import WorkoutsContext from '../WorkoutsContext';
// import WorkoutDay from '../WorkoutDay/WorkoutDay';
// import STORE from '../../STORE';

class ViewWorkouts extends Component {
	static contextType = WorkoutsContext;

	handleDelete = (workoutId, workoutBodyIdRef) => {
		this.context.updateWorkoutId(workoutId)
		this.context.updateWorkoutBodyIdRef(workoutBodyIdRef)

		fetch(`http://localhost:8000/viewworkouts/${this.context.workoutId}/${this.context.workoutBodyIdRef}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		})
		.then(res => {
			if(!res.ok) {
				throw new Error('Oops, something went wrong with deleting your workout. Please try again.')
			}
			console.log('server response')
			// res.json() //return deleted workout Id, then update workout via context below, which will auto trigger re-render and display current workouts
		})
		.then(() => {console.log("debug"); this.context.deleteWorkout(this.context.workoutId); this.context.deleteEvent(this.context.workoutBodyIdRef)})
		.catch(err => console.log(err))
	}

	render() {
	console.log(this.context.workouts, 'full array');
	let arrayLoaded = this.context.workouts[0] ? true : false;
	let workoutData = this.context.workouts;
	let selectedWorkouts;


	if (arrayLoaded && this.context.selectedDate) {
		let filteredWorkouts = workoutData.filter(workout => 
			workout.start.includes(this.context.selectedDate))

		selectedWorkouts = filteredWorkouts.map(workout => 
			<div>
				{workout.title}
				{workout.exercises.exercise}
				{workout.exercises.sets}
				{workout.exercises.reps}
				{workout.exercises.weight}
				<button onClick={() => 
					this.handleDelete(workout.exercises.workoutId, workout.exercises.workoutBodyIdRef)} type='button'>delete
				</button>
			</div>
		)
	}

  	return (
		<div>
			<ReactCalendar />	
			<div className='workouts-container'>
				{selectedWorkouts}
			</div>
		</div>
  	)
	}
}

export default ViewWorkouts;