import {useState} from 'react'

function App() {
  const [toDoList, setToDoList] = useState(['Code on day 1', 'Code on day 2', 'Code on day 3']);
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List App</h1>
        <main>
         <CreateToDoList list={toDoList}>

         </CreateToDoList>
         <label for="new_to_do">
          Add to-do:
         </label>
        <input id="new_to_do" type="text" name="new_to_do">

        </input>
        <button type="submit">Submit</button>

        </main>
        
      </header>
    </div>
  );
}

const CreateToDoList = (props) => {
  const {list} = props;
  return (
    <ul>
      {list.map(toDo => {
        return <li>{toDo}</li>
      })}
    </ul>
  )
}

const addToDos = (props) => {

}

export default App;
