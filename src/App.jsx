import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
