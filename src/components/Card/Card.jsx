import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Card = ({ todo, removeCard, cardIndex }) => {
  return (
    <div className="card">
      <input className="card__checkbox" type="checkbox" />
      <p className="card__text">
        {todo}
        {cardIndex}
      </p>
      <button className="card__icon" onClick={() => removeCard(cardIndex)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Card;
