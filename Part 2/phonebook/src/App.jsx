import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameOnChange = (event) => {
    setNewName(event.target.value);
  };

  const addToPhonebook = (event) => {
    event.preventDefault();
    const isNamePresent = persons.find((person) => person.name === newName);
    if (isNamePresent) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName }]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addToPhonebook}>
        <div>
          name: <input id="name" onChange={handleNameOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return <Person personName={person.name} />;
        })}
      </div>
    </div>
  );
};

export default App;
