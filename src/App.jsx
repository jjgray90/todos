import "./App.scss";
import { useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleInput = (event, string) => {
    event.preventDefault();
    setTodos([...todos, string]);
  };

  const removeCard = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <div className="app">
      <NavBar handleInput={handleInput} />
      <Main todos={todos} removeCard={removeCard} />
    </div>
  );
};

export default App;
