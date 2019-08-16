import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CalendarDay from '../Calendar Day/CalendarDay';
import { months } from '../DATESTORE';
import './Calendar.css';
// import STORE from '../../STORE';

class Calendar extends Component {
  render() {
		let currentMonth = months[0];
		let august = currentMonth.days.map(entry => {
			return <CalendarDay day={entry.day} date={entry.date}/>

		})

  	return (
			<div className="calendar-container">
				<h2>
					August
				</h2>
				<ul>
					{august}
				</ul>
			</div>
  	)
	}
}

export default Calendar;