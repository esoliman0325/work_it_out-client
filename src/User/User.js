import React, { Component } from 'react';
import WorkoutsContext from '../WorkoutsContext';
import config from '../config';
import './User.css';


const { API_BASE_URL } = config;

class User extends Component {
static contextType = WorkoutsContext;


  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.context.updateUser(user);
		});
  }
  
  handleEventsWorkouts = (newEventsWorkouts) => {
    this.context.updateEvents(newEventsWorkouts[0])
    this.context.updateWorkouts(newEventsWorkouts[1])
  }

  handleSignInOut = () => {
    if(this.context.user) {
      this.props.firebase.auth().signOut()
      this.context.updateEvents([])
      this.context.updateWorkouts([])
    }

    else if(!this.context.user) {
      let signIn = new Promise((resolve, reject) => {
        this.props.firebase.auth().signInWithPopup(new this.props.firebase.auth.GoogleAuthProvider()).then((result) => {
          console.log(result, 'auth user')
          let user = result.user.displayName;
          resolve(user)
        }, () => {
          reject()
        })
      });

      signIn.then(() => {
        fetch(`${API_BASE_URL}/viewworkouts/${this.context.user.displayName}`,  {
          method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
        .then(res => {
          if (!res.ok) {
            // throw new Error('Oops, something went wrong with getting your workout. Please try to sign out and sign in again.')
            Error(res.error)
            
          }
          return res.json()
        })
        .then(response => { 
          console.log(response, 'get res')
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
              userId: workout.user_full_name_id,
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
        .then((newEventsWorkouts) => {
          this.handleEventsWorkouts(newEventsWorkouts)
          if (typeof newEventsWorkouts[1][0] !== 'undefined') {
            this.context.updateUserId(newEventsWorkouts[1][0].userId)
          }
          this.context.updateUserId(0)
        }) 
        .catch(err => alert(err))
      })
    }
  }
  
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