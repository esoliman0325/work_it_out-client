import React from 'react';

const WorkoutsContext = React.createContext({
    workouts: [],
    selectedDate: '',
    addWorkout: () => {},
    deleteWorkout: () => {},
    updateWorkout: () => {},
    updateDate: () => {}
})

export default WorkoutsContext;