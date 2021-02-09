type ExerciseListProps = {
    exercises: Exercise[];
}

function ExerciseList ({exercises}: ExerciseListProps) {
    if (!exercises.length) return null;
    return (
        <>
            {
            exercises.map((exercise) => <div key={exercise.id}>{exercise.id} - {exercise.name} - {exercise.category}</div>)
            }
        </>
    );
}

export default ExerciseList;