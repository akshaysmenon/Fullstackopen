const Total = (props) => {
    const parts = props.parts;
    let totalExercises = 0;
    parts.forEach((part) => {
        totalExercises = totalExercises + part.exercises;
    });
    return (
        <p>Number of exercises: {totalExercises} </p>
    )
};

export default Total;