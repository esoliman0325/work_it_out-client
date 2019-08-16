import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './CalendarDay.css';
// import STORE from '../../STORE';

class CalendarDay extends Component {
	handleDisplayDay = (day) => {
		alert(day)
	}
	
	render() {
		
  	return (
		<div onClick={() => this.handleDisplayDay(this.props.day)} className='day'>
			{/* {this.props.day} */}
			{this.props.date}
		</div>
  	)
	}
}

export default CalendarDay;