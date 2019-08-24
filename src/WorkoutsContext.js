import React from 'react';

const WorkoutsContext = React.createContext({
    workouts: [],
    selectedDate: '',
    // addWorkout: () => {},
    // deleteWorkout: () => {},
    updateWorkouts: () => {},
    updateDate: () => {}
})

export default WorkoutsContext;