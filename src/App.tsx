import AppHeader from './header/AppHeader'
import ExercisePage from './exercise/ExercisePage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { exerciseListKey } from './keys';
import './App.scss';

function App() {
  const [exercises, setExercises] = useLocalStorage<Exercise[]>(exerciseListKey, []);

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <ExercisePage exercises={exercises} onAddExercise={ex => setExercises([...exercises, ex])}></ExercisePage>
    </div>
  );
}

export default App;
