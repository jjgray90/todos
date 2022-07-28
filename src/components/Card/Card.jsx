import "./Card.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Card = ({ todo, removeCard, cardIndex }) => {
  const [strikeThrough, setStrikeThrough] = useState("");

  const handleCheck = (e) => {
    if (e.target.checked) {
      setStrikeThrough("card__text--strikethrough");
    }
    if (!e.target.checked) {
      setStrikeThrough("");
    }
  };

  return (
    <div className="card">
      <input
        className="card__checkbox"
        type="checkbox"
        onChange={(e) => handleCheck(e)}
      />
      <p className={`card__text ${strikeThrough}`}>{todo}</p>
      <button className="card__icon" onClick={() => removeCard(cardIndex)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Card;
