import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", phone: "" });
  const [filter, setFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState(persons);

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

  const handleFilterOnChange = (event) => {
    const filterBy = event.target.value;
    setFilter(filterBy);
    if (!filterBy) {
      setFilteredResults(persons);
      return;
    }
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filterBy.toLowerCase())
    );
    setFilteredResults([...filtered]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={handleFilterOnChange} />
      <PersonForm person={newPerson} onFormSubmit={addToPhonebook} onInputChange={handleOnChange} />
      <h2>Numbers</h2>
      <Persons persons={filteredResults} />
    </div>
  );
};

export default App;
