const Person = ({ id, name, phone, onDeletePerson}) => {
  return (
    <>
      <span>{name} &nbsp; {phone}</span> <button onClick={() => onDeletePerson(id, name)}>Delete</button>
      <br />
    </>
  );
};

export default Person;
