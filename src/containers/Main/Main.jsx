import "./Main.scss";

const Main = ({ todos }) => {
  const todosJSX = todos.map((todo) => <p key={todo}>{todo}</p>);

  return <div className="main">{todosJSX}</div>;
};

export default Main;
