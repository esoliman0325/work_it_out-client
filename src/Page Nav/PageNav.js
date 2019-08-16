import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './PageNav.css';
// import STORE from '../STORE';

class PageNav extends Component {
	render() {
		return (
			<div className='Nav-Buttons'>
				<Link to={'/'}>
					<button type="button">LOGO</button>
				</Link>
				<button type="button">REGISTER</button>
				<button type="button">SIGN IN</button>
				<button type="button">PROGRESS</button>
				<div className='dropdown'>
					<button className='dropbtn' type="button">WORKOUTS</button>
					<div className='dropdown-content'>
						<Link className='add-workout-link' to={'/workouts/add'}>ADD WORKOUT</Link>
						<Link className='view-workout-link' to={'/workouts/view'}>VIEW WORKOUT</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default PageNav;