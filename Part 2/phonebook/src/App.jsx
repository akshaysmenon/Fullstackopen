import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "0894023323" },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", phone: "" });

  const handleOnChange = (event) => {
    const name = event.target.name;
    setNewPerson({ ...newPerson, [name]: event.target.value });
  };

  const addToPhonebook = (event) => {
    event.preventDefault();
    const isNamePresent = persons.find(
      (person) =>
        person.name === newPerson.name || person.phone === newPerson.phone
    );
    if (isNamePresent) {
      alert(`${newPerson.name} is already added to the phonebook`);
    } else {
      setPersons([...persons, newPerson]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addToPhonebook}>
        <div>
          name: <input id="name" name="name" onChange={handleOnChange} />
        </div>
        <div>
          number: <input id="phone" name="phone" onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return <Person name={person.name} phone={person.phone} />;
        })}
      </div>
    </div>
  );
};

export default App;
