const CreateToDoList = ({ list, toDoList, setToDoList }) => {
  function handleRemove(toDo) {
    const newList = toDoList.filter((item) => item !== toDo);

    setToDoList(newList);
  }

  return toDoList.length ? (
    <ul className="to-do-list">
      {list.map((toDo) => {
        return (
          <li key={toDo}>
            {toDo}{' '}
            <button type="button" onClick={() => handleRemove(toDo)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="to-do-list">
      <li>You have no todos, add one below to get started!</li>
    </ul>
  );
};

export default CreateToDoList;
