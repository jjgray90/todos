import "./InputField.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ handleInput, placeholder }) => {
  const [text, setText] = useState("");
  return (
    <form
      className="input-field"
      onSubmit={(e) => {
        handleInput(e, text);
        setText("");
      }}
    >
      <input
        className="input-field__input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="input-field__icon" value="submit">
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form>
  );
};

export default InputField;
