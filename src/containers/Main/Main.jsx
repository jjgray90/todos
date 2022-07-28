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

  return (
    <div className="main">
      {todos.length < 1
        ? "Nothing to see here yet...Add a task in the field above! 👆"
        : todosJSX}
    </div>
  );
};

export default Main;
