const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        id="filter"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
