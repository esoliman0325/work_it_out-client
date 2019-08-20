import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import WorkoutsContext from '../WorkoutsContext';
import './ViewWorkouts.css';
// import Basic from '../Calendar/Calendar';
import ReactCalendar from '../Calendar/Calendar';
// import STORE from '../../STORE';

class ViewWorkouts extends Component {

	// this.state = {date: new Date()}
	// const workoutDate = WorkoutsContext.date;

	// componentDidMount() {
	// 	fetch(`https://localhost:8000/viewworkout/:${workoutDate}`, {
	// 		method: 'GET',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 			// add authorization?
	// 		}
	// }
	// use for dynamic routing ?date={this.state.date}
componentDidMount() {
	fetch('http://localhost:8000/viewworkouts',  {
		method: 'GET',
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			}
	})
	.then(response => response.text())
	.then(response => console.log(response))
	.catch(err => console.log(err))
	// .then(data => {
	// 	console.log(data)
	// });
	}

  render() {

		// const displayedDay = STORE.find(this.context.date);

  	return (
			<div>
				<ReactCalendar /> 
				{/* // display workout */}
			</div>
  	)
	}
}

export default ViewWorkouts;