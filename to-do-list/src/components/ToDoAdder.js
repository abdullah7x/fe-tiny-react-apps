const ToDoAdder = ({ setToDoList, newToDo, setNewToDo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setToDoList((currList) => {
      return [...currList, newToDo];
    });
    setNewToDo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a new todo:
        <input
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoAdder;
