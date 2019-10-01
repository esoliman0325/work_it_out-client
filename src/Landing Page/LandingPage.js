import React, { Component } from 'react';
import WorkoutsContext from '../WorkoutsContext';
import * as firebase from 'firebase';
import User from '../User/User';
// import { Route } from 'react-router-dom';
import './LandingPage.css';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "work-it-out-64655.firebaseapp.com",
  databaseURL: "https://work-it-out-64655.firebaseio.com",
  projectId: "work-it-out-64655",
  storageBucket: "",
  messagingSenderId: "71569913318",
  appId: "1:71569913318:web:e4999525dd73b8ef3c1227"
}

firebase.initializeApp(firebaseConfig)


class LandingPage extends Component {
	static contextType = WorkoutsContext;

  render() {
		let fadeBack = this.context.showMenu ? 'landing-page-container fade-back': 'landing-page-container';

  	return (
			<div>
				<div className={fadeBack}>
							<div className='work-it-out-body'>
								<h2>Work it Out</h2>
								<p>Keep track of your workouts.</p>
									<nav id="main">
          					<User firebase={firebase} />
        					</nav>
							</div>
							
							<h2>What is Work it Out?</h2>
							
							<div className='what-is'>
									<p>Work it out allows you to create, view in calendar,
									and ultmately keep track of your daily workouts.</p> 
							</div>
				</div>
			</div>
  	)
	}
}

export default LandingPage;