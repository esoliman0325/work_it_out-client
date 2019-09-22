import React, { Component } from 'react';
import WorkoutsContext from '../WorkoutsContext';
// import { Route } from 'react-router-dom';
import './LandingPage.css';



class LandingPage extends Component {
	static contextType = WorkoutsContext;

  render() {
		let fadeBack = this.context.showMenu ? 'landing-page-container fade-back': 'landing-page-container';

  	return (
			<div>
				<div className={fadeBack}>
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
							<div className='what-is'>
									<p>Work it out allows you to create, view in calendar,
									and ultmately keep track of your daily workouts.</p> 
							</div>
						</div>
					</div>
				</div>
			</div>
  	)
	}
}

export default LandingPage;