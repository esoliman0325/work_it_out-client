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
		this.context.updateWorkoutIds(workoutId, workoutBodyIdRef)

		// let updateIds = new Promise((resolve, reject) => {
		// 	(this.context.updateWorkoutId(workoutId) && this.context.updateWorkoutBodyIdRef(workoutBodyIdRef))
		// 	.then((result) => {
		// 	//   console.log(result, 'update ids result')
		// 	  resolve(result)
		// 	}, () => {
		// 	  reject()
		// 	})
		//   });

			// updateIds.then(() => {

			// })
	}

	render() {
	console.log(this.context.workouts, 'full array');
	// let arrayLoaded = this.context.workouts[0] ? true : false;
	let workoutData = this.context.workouts;
	let fade = (this.context.selectedDate && this.context.user) ? 'workouts-container fade': 'workouts-container';
	let nullDate = '';
	let selectedWorkouts;
	let deleteButton;
	


	if (this.context.selectedDate && this.context.user) {
		let filteredWorkouts = workoutData.filter(workout => 
			workout.start.includes(this.context.selectedDate))

		selectedWorkouts = 
		filteredWorkouts.map(workout => 
			<div className='workouts'>
				<div className='workout-title'>{workout.title.toUpperCase()}</div>
				<div>{workout.exercises.exercise}</div>
				<div>Sets: {workout.exercises.sets}</div>
				<div>Reps: {workout.exercises.reps}</div>
				<div>Weight: {workout.exercises.weight}</div>
				<button className='delete-button' onClick={() => 
					this.handleDelete(workout.exercises.workoutId, workout.exercises.workoutBodyIdRef)} type='button'>DELETE
				</button>
			</div>
		)

		deleteButton = selectedWorkouts.length ? <button onClick={()=> this.context.updateDate(nullDate)} className='exit-workout-display' type='button'>X</button> : '';
	}

	console.log(selectedWorkouts, 'selected workouts')

  	return (
		<div>
			<ReactCalendar />	
			<div className={fade}>
				{deleteButton}
				{selectedWorkouts}
			</div>
		</div>
  	)
	}
}

export default ViewWorkouts;