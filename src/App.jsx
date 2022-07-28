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

  return (
    <div className="app">
      <NavBar handleInput={handleInput} />
      <Main />
    </div>
  );
};

export default App;