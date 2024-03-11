import Part from './Part';

const Content = (props) => {
  return (
    <>
      <Part partTitle={props.part1} numberOfExercises={props.exercise1} />
      <Part partTitle={props.part2} numberOfExercises={props.exercise2} />
      <Part partTitle={props.part3} numberOfExercises={props.exercise3} />
    </>
  );
};

export default Content;
