import React, { Component } from 'react';
import WorkoutsContext from '../WorkoutsContext';
import * as firebase from 'firebase';
import User from '../User/User';
import config from '../config';
// import { Route } from 'react-router-dom';
import './LandingPage.css';

const { FIREBASE_KEY } = config;
const firebaseConfig = {
  apiKey: `${FIREBASE_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: "",
  messagingSenderId: "71569913318",
  appId: `${process.env.REACT_APP_APP_ID}`
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