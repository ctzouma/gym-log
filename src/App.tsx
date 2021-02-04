import React, { useState } from 'react';
import './App.scss';
import Input from './input';
import ExerciseList from './exercise-list/ExerciseList'

function App() {
  const [exercises, setExercises] = useState([] as Array<string>);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Gym log
        </p>
      </header>
      <ExerciseList exercises={exercises}/>
      <Input onAddExercise={(exercise: string) => { if (exercise.length) setExercises(exercises => [...exercises, exercise]) }}/>
    </div>
  );
}

export default App;
