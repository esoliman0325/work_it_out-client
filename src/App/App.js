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
      selectedDate: ''
    }
}

updateDate = selectedDate => {
  this.setState({
    selectedDate
  })
  console.log(this.state.selectedDate, 'selected date')
}

updateWorkouts = workouts => {
  this.setState({
    workouts
  })
  // console.log(this.state.workouts, 'hi frontend workout')
}


  render() {
    const contextValue = {
      workouts: this.state.workouts,
      selectedDate: this.state.selectedDate,
      updateDate: this.updateDate,
      updateWorkouts: this.updateWorkouts
    }

    return (
      <main className='App'>
      <WorkoutsContext.Provider value={contextValue}>
        <PageNav />
        <Route exact path='/' component={LandingPage}/>
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
