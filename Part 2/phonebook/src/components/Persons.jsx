import Person from "./Person";
const Persons = ({ persons, onDeletePerson}) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            phone={person.phone}
            onDeletePerson={onDeletePerson}
          />
        );
      })}
    </div>
  );
};

export default Persons;
