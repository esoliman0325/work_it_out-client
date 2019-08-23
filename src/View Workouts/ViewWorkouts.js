import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import WorkoutsContext from '../WorkoutsContext';
import './ViewWorkouts.css';
// import Basic from '../Calendar/Calendar';
// import ReactCalendar from '../Calendar/Calendar';
import ReactCalendar from '../Calendar/Calendar';
// import WorkoutsContext from '../WorkoutsContext';
// import WorkoutDay from '../WorkoutDay/WorkoutDay';
// import STORE from '../../STORE';

class ViewWorkouts extends Component {

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
		// const displayedDay = STORE.find(this.context.date);
  	return (
			<div>
				<ReactCalendar />
				{/* will map over results in workouts array via context to display instances of each individual workouts*/}
				{/* {WorkoutsContext.workouts.exercise} */}
			</div>
  	)
	}
}

export default ViewWorkouts;