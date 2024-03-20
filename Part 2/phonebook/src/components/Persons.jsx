import Person from './Person';
const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => {
        return <Person name={person.name} phone={person.phone} />;
      })}
    </div>
  );
};

export default Persons;
