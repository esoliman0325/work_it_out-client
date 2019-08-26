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

// use for dynamic routing route params ?date={this.state.date}
// componentDidMount() {
// 	fetch('http://localhost:8000/viewworkouts',  {
// 		method: 'GET',
// 		headers : { 
// 			'Content-Type': 'application/json',
// 			'Accept': 'application/json'
// 			}
// 	})
// 	.then(response => response.text())
// 	.then(response => console.log(response))
// 	.catch(err => console.log(err))
// 	// .then(data => {
// 	// 	console.log(data)
// 	// });
// 	}

// componentDidMount() {
//     let $ = jquery;
//     $(document).ready(function (){
//       $(".rbc-date-cell").hover(function(event) {
//         let day_of_month = $(event.currentTarget).find('a').text();
//         $(event.currentTarget).find('a').attr('href', day_of_month);
//       })

//       $(".rbc-date-cell").click(function(event) {
//         let day_of_month = $(event.currentTarget).find('a').text();
//         let url = 'http://localhost:3000/viewworkouts/' + day_of_month;
//         console.log("Date: August " + day_of_month);
        
//         // Construct Date
        
//         // Do GET

//         window.location.replace(url);




//         // Show returned data below calendar

//       }).css({
//         height:'76px',
//       });
//     });
//   }

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
			</div>
		)
		return selectedWorkouts
		// console.log(selectedWorkouts);
		// workout = <div>{this.context.workouts[0].title}</div>
		// console.log(workoutbyDate, 'workouts')
	}

	// let { workouts, selectedDate } = this.context;
	// let currentWorkouts = workouts;
	// let like = this.context.workouts;
	// console.log(this.context.workouts[0].title, 'vw context')
	// console.log(this.context.selectedDate, 'vw date')s
	// example of trying to access selected date via context -- retuerning undefined
	// console.log(this.context.selectedDate, 'selected Date');
	// example of trying to access workouts array via context -- returning undefined-- ultimately need to map/find workouts with date in selected Date
	// console.log(workouts, 'Workouts');
	// console.log(currentWorkouts.map(workout => workout[0]))
  	return (
		<div>
			<ReactCalendar />
			<div>
				{selectedWorkouts}
			</div>
			{/* {context.workouts[0].title} */}
			{/* will map over results in workouts array via context to display instances of each individual workouts*/}
			{/* {WorkoutsContext.workouts.exercise} */}
		</div>
  	)
	}
}

export default ViewWorkouts;