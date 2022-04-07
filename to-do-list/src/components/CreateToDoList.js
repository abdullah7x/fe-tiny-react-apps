const CreateToDoList = ({ list, toDoList, setToDoList }) => {
  function handleRemove(toDo) {
    const newList = toDoList.filter((item) => item !== toDo);

    setToDoList(newList);
  }

  return (
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
  );
};

export default CreateToDoList;
