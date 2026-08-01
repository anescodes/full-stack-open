import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newPerson, setPerson] = useState({
    name: "",
    number: "",
  });

  const [search, setSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const exists = persons.find(
      (person) => person.name === newPerson.name
    );

    if (exists) {
      alert(`${newPerson.name} is already added`);
      return;
    }

    setPersons([
      ...persons,
      {
        name: newPerson.name,
        number: newPerson.number,
        id: persons.length + 1,
      },
    ]);

    setPerson({
      name: "",
      number: "",
    });
  };

  const handleNewChange = (event) => {
    const { name, value } = event.target;

    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <p>
        filter shown with{" "}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </p>

      <form onSubmit={addPerson}>
        <h2>Add a new</h2>

        <div>
          name:
          <input
            name="name"
            value={newPerson.name}
            onChange={handleNewChange}
          />
        </div>

        <div>
          number:
          <input
            name="number"
            value={newPerson.number}
            onChange={handleNewChange}
          />
        </div>

        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>

      <ul>
        {filteredPersons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;