import "./Main.scss";
import Card from "../../components/Card/Card";

const Main = ({ todos, removeCard }) => {
  const todosJSX = todos.map((todo, index) => (
    <Card
      key={todo + index}
      todo={todo}
      removeCard={removeCard}
      cardIndex={index}
    />
  ));

  return <div className="main">{todosJSX}</div>;
};

export default Main;
