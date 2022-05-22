import { useState } from 'react';
import CreateToDoList from './components/CreateToDoList';
import ToDoAdder from './components/ToDoAdder';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">To-Do List</h1>
        <main>
          <CreateToDoList
            list={toDoList}
            toDoList={toDoList}
            setToDoList={setToDoList}
          ></CreateToDoList>
          <ToDoAdder
            setToDoList={setToDoList}
            newToDo={newToDo}
            setNewToDo={setNewToDo}
          ></ToDoAdder>
        </main>
      </header>
    </div>
  );
}

export default App;
