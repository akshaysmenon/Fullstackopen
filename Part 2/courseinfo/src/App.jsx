import Course from "./components/Course";

const App = () => {
  let course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  course = [course].map((course) => {
    course.totalExercises = course.parts.reduce((totalExercises, part) => {
      return totalExercises += part.exercises;
    }, 0);
    return course;
  });

  return course.map((course) => (
    <Course
      key={course.id}
      id={course.id}
      course={course.name}
      parts={course.parts}
      totalExercises={course.totalExercises}
    />
  ));
};

export default App;
