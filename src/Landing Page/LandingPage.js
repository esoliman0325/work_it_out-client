import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import './LandingPage.css';



class LandingPage extends Component {
  render() {
  	return (
			<div>
				<div className='landing-page-container'>
					<div>
						<div>
							<div className='work-it-out-body'>
								<h2>Work it Out</h2>
								<p>Keep track of your workouts.</p>
								<div className='sign-up'>
									SIGN UP TODAY!
								</div>
							</div>
							<h2>What is Work it Out?</h2>
							<div class='what-is'>
								<p>
									<p>Work it out allows you to create, view in calendar,</p> 
									<p>and ultmately keep track of your daily workouts.</p>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
  	)
	}
}

export default LandingPage;