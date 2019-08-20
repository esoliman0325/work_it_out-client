import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
  	return (
			<div>
				<div className='landing-page-container'>
					<div>
						<h2>CREATE YOUR OWN CUSTOM WORKOUT PLAN</h2>
						<p>Work it Out allows you to create and keep track of custom workout plans based on what works for you.</p>
					</div>
					<div>
						<h2>Custom Workout Plan</h2>
						<p>
							Work it out allows you to create and keep track of workouts that work for you. While there are many online resources
							that have fully built workout plans, they do not custom fit your goals. Work it out encourages you to find your favorite workouts via online resources,
							word of mouth, etc. and build your own customized workout plan. 
						</p>
						<h2>Manage Your Workouts</h2>
						<p>
								Work it out allows you to manage your custom workout plan by checking off exercises as you complete them. Create, update and delete workouts as you see fit.  
						</p>
						<h2>Share Your Workouts</h2>
						<p>
								Have you created a workout plan that has been effective? Share your knowledge with the public via our share feature. 
						</p>
					</div>
				</div>
			</div>
  	)
	}
}

export default LandingPage;