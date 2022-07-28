import "./InputField.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ handleInput }) => {
  const [text, setText] = useState("");
  return (
    <form
      className="input-field"
      onSubmit={(event) => handleInput(event, text)}
    >
      <input
        className="input-field__input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="input-field__icon" value="submit">
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form>
  );
};

export default InputField;
