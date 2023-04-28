function Todo(params) {
  //nested function created which is used for when the button 'Delete' is clicked
  function deleteHandler() {
    console.log("Button has been clicked!");
    console.log("Card which was deleted: " + params.title);
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
    </div>
  );
}

export default Todo;
