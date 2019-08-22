import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import STORE from '../STORE';
import PageNav from '../Page Nav/PageNav';
import LandingPage from '../Landing Page/LandingPage';
import AddWorkouts from '../Add Workouts/AddWorkouts';
import ViewWorkouts from '../View Workouts/ViewWorkouts';
import WorkoutsContext from '../WorkoutsContext';

class App extends Component {
constructor(props) {
  super(props);
    this.state = {
      workouts: [],
      date: new Date(),
    }
}

// update date to pass to b/e to use for query 
// updateDate = date => {
//   this.setState({
//   date
//   })
// }

// updateWorkout = workouts => {
//   this.setState({
//     //check to see if server responds with array of object, if so can remove [] from workouts state above
//     workouts
//   })
// }

// deleteWork = workout => {
//   const updatedWorkoutList = this.state.workouts.filter(workout => 
//     workout.id !== workouts.id
// )
// }

  render() {
    const contextValue = {
      workouts: this.state.workouts,
      date: this.state.date,
      addWorkout: this.addWorkout,
      updateDate: this.updateDate
    }

    return (
      <main className='App'>
        <PageNav />
        <Route exact path='/' component={LandingPage}/>
        <WorkoutsContext.Provider value={contextValue}>
          <Route path='/workouts/add' component={AddWorkouts} /> 
          <Route path='/viewworkouts/' component={ViewWorkouts} />
          {/* <Route path='viewworkouts/:date' component={WorkoutDay}/> */}
          {/* <Route path='/viewworkouts/:date' component={ViewWorkoutByDate} /> */}
        </WorkoutsContext.Provider> 
      </main>
    )
  }
}

export default App;
