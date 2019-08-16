import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './ViewWorkouts.css';
import Calendar from '../Calendar/Calendar';
// import STORE from '../../STORE';

class ViewWorkouts extends Component {
  render() {

		// const displayedDay = STORE.find(this.context.date);

  	return (
			<div>
				<Calendar />
			</div>
  	)
	}
}

export default ViewWorkouts;