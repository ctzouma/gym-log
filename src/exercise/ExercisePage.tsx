import { useState } from 'react';
import Input from '../Input';
import { v4 } from 'uuid';
import ExerciseList from './ExerciseList';
import './ExercisePage.scss';

type ExercisePageProps = {
    onAddExercise?: (f: Exercise) => void;
    exercises: Exercise[];
}

enum BodyPart {
    CHEST = 'CHEST',
    BACK = 'BACK',
    BICEPS = 'BICEPS',
    TRICEPS = 'TRICPES',
    LEGS = 'LEGS'
}

function ExercisePage({exercises, onAddExercise = f => f}: ExercisePageProps) {
    const [category, setCategory] = useState(BodyPart.CHEST);

    function addExercise(exercise: string): void {
        if (exercise.length && !exerciseExists(exercise)) {
          const ex: Exercise = {id: v4(), name: exercise, category: category, history: []};
          onAddExercise(ex);
        }
    }
    
    function exerciseExists(exercise: string): boolean {
        return !!exercises.find(e => e.name === exercise);
    }

    return (
        <>
            <div className="ex-input-cont">
                <select value={category} onChange={(e) => setCategory(e.target.value as BodyPart)}>
                    {Object.keys(BodyPart).map((bp, i) => <option key={i} value={bp}>{bp}</option>)}
                </select>
                <Input onClickAdd={(exercise: string) => addExercise(exercise)} buttonLabel="Add Exercise"/>
            </div> 
            <ExerciseList exercises={exercises}></ExerciseList>
        </>
    )
    
}

export default ExercisePage;