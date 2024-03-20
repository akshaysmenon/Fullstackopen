const PersonForm = ({ person, onFormSubmit, onInputChange }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        name:{" "}
        <input
          id="name"
          name="name"
          value={person.name}
          onChange={onInputChange}
        />
      </div>
      <div>
        number:{" "}
        <input
          id="phone"
          name="phone"
          value={person.phone}
          onChange={onInputChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;