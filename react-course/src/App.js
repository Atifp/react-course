import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="New Card" />
      <Todo title="Passing data" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
