import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", phone: "" });
  const [filter, setFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState(persons);

  const fetchAddressBook = async () => {
    try {
      const response = await axios.get("http://localhost:3001/persons");
      setPersons(response.data);
      setFilteredResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddressBook();
  }, []);

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
      <PersonForm
        person={newPerson}
        onFormSubmit={addToPhonebook}
        onInputChange={handleOnChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredResults} />
    </div>
  );
};

export default App;
