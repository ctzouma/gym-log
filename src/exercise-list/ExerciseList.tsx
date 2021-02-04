import React from 'react';

function ExerciseList ({exercises}: {exercises: Array<string>}) {
    if (!exercises.length) return null;
    return (
        <>
            {
            exercises.map((exercise, i) => <div key={i}>{exercise}</div>)
            }
        </>
    );
}

export default ExerciseList;