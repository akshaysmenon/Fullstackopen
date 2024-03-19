import Course from "./components/Course";

const App = () => {
  let courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map((course) => {
    course.totalExercises = course.parts.reduce((totalExercises, part) => {
      return (totalExercises += part.exercises);
    }, 0);
    return (
      <Course
        key={course.id}
        id={course.id}
        course={course.name}
        parts={course.parts}
        totalExercises={course.totalExercises}
      />
    );
  });
};

export default App;
