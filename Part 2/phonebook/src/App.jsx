import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { createRecord, deleteRecord } from "./services/phonebook";

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

  useEffect(() => {
    filterPersons();
  }, [persons, filter]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    setNewPerson({ ...newPerson, [name]: event.target.value });
  };

  const addToPhonebook = async (event) => {
    event.preventDefault();
    const isNamePresent = persons.find(
      (person) =>
        person.name === newPerson.name || person.phone === newPerson.phone
    );
    if (isNamePresent) {
      alert(`${newPerson.name} is already added to the phonebook`);
    } else {
      const response = await createRecord(newPerson);
      setPersons([...persons, response.data]);
    }
  };

  const handleFilterOnChange = (event) => {
    setFilter(event.target.value);
  };

  const filterPersons = () => {
    if (!filter) {
      setFilteredResults([...persons]);
      return;
    }
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredResults([...filtered]);
  };

  const handleDeletePerson = async (id, name) => {
    const confirmDeleteText = `Are you sure you want to delete ${name} from the phonebook?`;
    if (confirm(confirmDeleteText)) {
      const response = await deleteRecord(id);
      setPersons(persons.filter((person) => person.id !== response.data.id));
    } else {
      //do nothing
    }
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
      <Persons persons={filteredResults} onDeletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
