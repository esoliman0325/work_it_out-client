import React from 'react';

const WorkoutsContext = React.createContext({
    workouts: [],
    date: '',
    // addWorkout: () => {},
    deleteWorkout: () => {},
    updateWorkout: () => {},
    updateDate: () => {} 
})

export default WorkoutsContext;