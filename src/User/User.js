import React, { Component } from 'react';
import WorkoutsContext from '../WorkoutsContext';
import './User.css';

let d = new Date();

// to bring date back to sept to load sept data...for testing will not use in prod 
let sept = new Date(d.setDate(d.getDate()-30));
d = sept 

var firstDay = (new Date(d.getFullYear(), d.getMonth(), 1)).toISOString();
var lastDay = (new Date(d.getFullYear(), d.getMonth() + 1, 0)).toISOString();

class User extends Component {
static contextType = WorkoutsContext;


  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.context.updateUser(user);
		});
  }
  
  handleSignInOut = () => {
    if(this.context.user) {
      this.props.firebase.auth().signOut()
    }

    else if(!this.context.user) {
      const signIn = 
      new Promise((resolve, reject) => {
        this.props.firebase.auth().signInWithPopup(new this.props.firebase.auth.GoogleAuthProvider());
        this.context.user ? resolve() : reject();
      });
      // let signIn = new promise((resolve) => {
        
      //   resolve();
      // }

      signIn.then(() => {
        fetch(`http://localhost:8000/viewworkouts/${firstDay}/${lastDay}/${this.context.user.displayName}`,  {
          method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
      })
        .then(res => res.json())
        .then(response => {
          console.log(response, 'array') 
          let newEvents = response.body.map(res => { 
            let returnedBody = {
              id: res.id,
              title: res.body_part,
              start: res.date,
              end: res.date
            }
            return returnedBody
          })

          let newWorkouts = response.all.map(workout => { 
            let returnedWorkouts = {
              id: workout.body_id,
              title: workout.body_part,
              start: workout.date,
              end: workout.date,
              exercises: {
                exercise: workout.exercise,
                sets: workout.sets,
                reps: workout.reps,
                weight: workout.weight,
                workoutId: workout.workoutId,
                workoutBodyIdRef: workout.body_id_reference
              }
            }
            return returnedWorkouts
          })
            let newEventsWorkouts = [newEvents, newWorkouts]

          return newEventsWorkouts
        })
        .then((newEventsWorkouts) => this.handleEventsWorkouts(newEventsWorkouts)) 
    }
  }

  // handleSignIn = () => {
  //   this.props.firebase.auth().signInWithPopup(new this.props.firebase.auth.GoogleAuthProvider());
  // }
  
  // handleSignOut = () => {
  //   this.props.firebase.auth().signOut();
  // }
  
  render() {
    return (
      <div>
				<button className='sign-in-out' onClick={() => this.handleSignInOut()}>
          SIGN {this.context.user ? 'OUT' : 'IN'}
        </button>
      </div>
    );
  }
}

export default User;