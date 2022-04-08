import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Naughts and Crosses</h1>
      <div id="game-board">
        <CreateBoard></CreateBoard>
      </div>
    </div>
  );
}

const CreateBoard = (props) => {
  const [boxArray, setBoxArray] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [turn, setTurn] = useState(1);

  const handleClick = (index) => {
    setBoxArray((currArray) => {
      const newArray = [...currArray];
      if (turn % 2 !== 0) {
        newArray[index] = 'X';
      } else newArray[index] = 'O';
      return newArray;
    });
    setTurn((currTurn) => {
      const number = currTurn + 1;
      return number;
    });
  };

  return boxArray.map((box, index) => {
    return (
      <button className="box" key={index} onClick={() => handleClick(index)}>
        {box}
      </button>
    );
  });
};

export default App;
