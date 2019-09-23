import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import STORE from '../STORE';
import PageNav from '../Page Nav/PageNav';
import LandingPage from '../Landing Page/LandingPage';
import AddWorkouts from '../Add Workouts/AddWorkouts';
import ViewWorkouts from '../View Workouts/ViewWorkouts';
import WorkoutsContext from '../WorkoutsContext';
import defaultUserImage from '../Assets/tomatoes-default-user-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { updateLocale } from 'moment';

class App extends Component {
static contextType = WorkoutsContext;
constructor(props) {
  super(props);
    this.state = {
      workouts: [],
      selectedDate: '',
      events: [],
      workoutId: 0,
      workoutBodyIdRef: 0,
      showMenu: false,
      user: null, 
      activeRoom: null
    }
}

updateWorkoutId = workoutId => {
  console.log('workout id')
  this.setState({
    workoutId
  })
}

updateWorkoutBodyIdRef = workoutBodyIdRef => {
  console.log('workout body id ref')
  this.setState({
    workoutBodyIdRef
  })
}

updateShowMenu = () => {
  console.log('menu app level')
  this.setState({
    showMenu: !this.state.showMenu
  })
}

updateDate = (selectedDate, nullDate) => {
  selectedDate ? this.setState({selectedDate}) : this.setState({selectedDate: nullDate});
  console.log(this.state.selectedDate, 'selected date state')
}

updateWorkouts = workouts => {
  this.setState({
    workouts
  })
  console.log(this.state.workouts, 'workouts state')
}

updateEvents = events => {
  this.setState({
    events
  })
  console.log(events, 'events state')
}

addEvent = addEvents => {
  let eventDate = addEvents.start;
  let eventTitle = addEvents.title;
  let filteredDate = this.state.events.filter(event => event.start === eventDate);
  let findTitle = filteredDate.find(event => event.title === eventTitle);

  if (!findTitle) {
    this.setState ({
      events: [...this.state.events, addEvents]
    })
  }
}

addWorkout = workout => {
  this.setState({
    workouts: [...this.state.workouts, workout]
  })
  console.log(this.state.workouts, 'post workouts state')
}

deleteWorkout = workoutId => {
  let newWorkouts = this.state.workouts.filter(workout => workout.exercises.workoutId !== workoutId)
  this.setState({
    workouts: newWorkouts
  })
}

deleteEvent = workoutBodyIdRef => {
  console.log('delete event', workoutBodyIdRef)
  let filteredWorkouts = this.state.workouts.filter(workout => workout.exercises.workoutBodyIdRef === workoutBodyIdRef);

  if(filteredWorkouts.length < 1) {
    let newEvents = this.state.events.filter(event => event.id !== workoutBodyIdRef)
    this.setState({
      events: newEvents
    })
  }
}

updateUser = user => {
  this.setState({ 
    user 
  })
}

updateRoom = room => {
  this.setState({ 
    activeRoom: room 
  })
}

  render() {
    const dumbBell = <FontAwesomeIcon icon={faDumbbell} style={{color: 'green'}} size='lg'/>
    const contextValue = {
      workouts: this.state.workouts,
      selectedDate: this.state.selectedDate,
      events: this.state.events,
      workoutId: this.state.workoutId,
      workoutBodyIdRef: this.state.workoutBodyIdRef,
      showMenu: this.state.showMenu,
      user: this.state.user,
      activeRoom: this.state.activeRoom,
      deleteWorkout: this.deleteWorkout,
      deleteEvent: this.deleteEvent,
      updateShowMenu: this.updateShowMenu,
      updateWorkoutId: this.updateWorkoutId,
      updateWorkoutBodyIdRef: this.updateWorkoutBodyIdRef,
      updateDate: this.updateDate,
      updateWorkouts: this.updateWorkouts,
      updateEvents: this.updateEvents,
      updateUser: this.updateUser,
      updateRoom: this.updateRoom,
      addWorkout: this.addWorkout,
      addEvent: this.addEvent
    }

    return (
      <main className='app'>
        <WorkoutsContext.Provider value={contextValue}>
        <div className='work-it-out-heading-container'>
          <h2 className='work-it-out-heading'>
            {dumbBell}
            <Link className='logo' to='/'>WORK IT OUT</Link>
          </h2>
        </div>

        <div className='username-container'>
					<div id="avatar">
						<img src={this.state.user ? this.state.user.photoURL : defaultUserImage} alt="user" />
					</div>
					<div id="user-display-name">{this.state.user ? this.state.user.displayName.split(' ')[0] : ''}
					</div>
        </div>

        <PageNav />
        
        <Route exact path='/' component={LandingPage}/>
          <Route path='/addworkouts' component={AddWorkouts} /> 
          <Route path='/viewworkouts/' component={ViewWorkouts} />
          {/* <Route path='viewworkouts/:date' component={WorkoutDay}/> */}
          {/* <Route path='/viewworkouts/:date' component={ViewWorkoutByDate} /> */}
        </WorkoutsContext.Provider> 
      </main>
    )
  }
}

export default App;
