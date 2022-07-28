import "./InputField.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const InputField = () => {
  return (
    <div className="input-field">
      <input className="input-field__input" type="text" />
      <div className="input-field__icon">
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  );
};

export default InputField;
