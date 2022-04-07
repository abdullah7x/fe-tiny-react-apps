import { useState } from 'react';
import CreateToDoList from './components/CreateToDoList';
import ToDoAdder from './components/ToDoAdder';

function App() {
  const [toDoList, setToDoList] = useState([
    'Code on day 1',
    'Code on day 2',
    'Code on day 3',
  ]);
  const [newToDo, setNewToDo] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">To-Do List App</h1>
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
