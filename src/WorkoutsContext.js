import React from 'react';

const WorkoutsContext = React.createContext({
    workouts: [],
    addWorkout: () => {},
    deleteWorkout: () => {},
    updateWorkout: () => {}
})

export default WorkoutsContext;