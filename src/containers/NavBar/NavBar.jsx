import "./NavBar.scss";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1 className="nav-bar__heading">My Todos</h1>
      <div className="nav-bar__button">
        <Button />
      </div>
      <div className="nav-bar__input-field">
        <InputField />
      </div>
    </div>
  );
};

export default NavBar;
