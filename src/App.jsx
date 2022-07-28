import "./App.scss";
import { useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleInput = (event, string) => {
    event.preventDefault();

    string.length < 1
      ? alert("Please Enter a todo")
      : setTodos([...todos, string]);
  };

  const removeCard = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const resetTodos = () => setTodos([]);

  return (
    <div className="app">
      <NavBar handleInput={handleInput} resetTodos={resetTodos} />
      <Main todos={todos} removeCard={removeCard} />
    </div>
  );
};

export default App;
