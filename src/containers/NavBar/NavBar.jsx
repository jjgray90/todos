import "./NavBar.scss";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const NavBar = ({ handleInput, resetTodos }) => {
  return (
    <div className="nav-bar">
      <h1 className="nav-bar__heading">My Todos</h1>
      <div className="nav-bar__button" onClick={resetTodos}>
        <Button btnText="Reset" />
      </div>
      <div className="nav-bar__input-field">
        <InputField handleInput={handleInput} />
      </div>
    </div>
  );
};

export default NavBar;
