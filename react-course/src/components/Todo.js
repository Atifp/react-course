import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(params) {
  // useState always returns an array with 2 elements, which can be stored in an array constant
  // First element specifies the value of the current state
  // Second value is a function that allows you to change the state
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //nested function created which is used for when the button 'Delete' is clicked
  function deleteHandler() {
    // This now makes sure Modal is shown
    setModalIsOpen(true);
    console.log("Button has been clicked!");
    console.log("Card which was chosen to be deleted: " + params.title);
  }

  function closeModalHandler() {
    // This will be used to remove the Modal and Backdrop
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{params.title}</h2>
      <div className="actions">
        {
          // Do not add () to the function name. This causes react to point to the function and not execute it, until it is clicked
        }
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {
        // Checks to see the state of modalIsOpen, if it is true, then the Modal and Backdrop functions are rendered
      }
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default Todo;
