import React, { useState } from 'react';

function Input({onAddExercise = (f: any) => f}) {
    const [exercise, setExercise] = useState('');

    function exerciseChanged(e: React.ChangeEvent<HTMLInputElement>) {
        const ex = e.target.value;
        console.log(ex);
        setExercise(ex);
    }

    return (
        <>
            <input type="text" value={exercise} onChange={exerciseChanged}></input>
            <button type="button" onClick={() => onAddExercise(exercise)}>Add Exercise</button>
        </>
    );
}

export default Input;