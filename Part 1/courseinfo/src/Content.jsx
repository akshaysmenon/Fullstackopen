import Part from "./Part";

const Content = (props) => {
  const parts = props.parts;
  console.log(parts)
  return (
    <>
      {parts.map((part) => 
        <Part partTitle={part.name} numberOfExercises={part.exercises} />
      )}
    </>
  );
};

export default Content;
