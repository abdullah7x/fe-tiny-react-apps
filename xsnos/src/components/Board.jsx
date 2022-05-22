import React from 'react';
import { useState } from 'react';

function Board() {
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
  const [disabled, setDisabled] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [turn, setTurn] = useState(1);
  const [overMessage, setOverMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    setDisabled((currDisabled) => {
      const disArray = [...currDisabled];
      disArray[index] = true;
      return disArray;
    });
    setTurn((currTurn) => {
      const number = currTurn;
      return number + 1;
    });
    setBoxArray((currBox) => {
      const box = [...currBox];
      if (turn % 2 !== 0) {
        box[index] = 'O';
      } else {
        box[index] = 'X';
      }

      if (
        (box[0] === 'O' && box[1] === 'O' && box[2] === 'O') ||
        (box[0] === 'X' && box[1] === 'X' && box[2] === 'X') ||
        (box[0] === 'X' && box[3] === 'X' && box[6] === 'X') ||
        (box[0] === 'O' && box[3] === 'O' && box[6] === 'O') ||
        (box[0] === 'X' && box[4] === 'X' && box[8] === 'X') ||
        (box[0] === 'O' && box[4] === 'O' && box[8] === 'O') ||
        (box[1] === 'X' && box[4] === 'X' && box[7] === 'X') ||
        (box[1] === 'O' && box[4] === 'O' && box[7] === 'O') ||
        (box[2] === 'X' && box[5] === 'X' && box[8] === 'X') ||
        (box[2] === 'O' && box[5] === 'O' && box[8] === 'O') ||
        (box[2] === 'X' && box[4] === 'X' && box[6] === 'X') ||
        (box[2] === 'O' && box[4] === 'O' && box[6] === 'O') ||
        (box[3] === 'X' && box[4] === 'X' && box[5] === 'X') ||
        (box[3] === 'O' && box[4] === 'O' && box[5] === 'O') ||
        (box[6] === 'X' && box[7] === 'X' && box[8] === 'X') ||
        (box[6] === 'O' && box[7] === 'O' && box[8] === 'O')
      ) {
        setGameOver(true);
        setTurn((n) => {
          if (n % 2 === 0) setOverMessage('Game Over: Player O wins');
          else setOverMessage('Game Over: Player X wins');
        });
      } else if (box.every((square) => square !== '')) {
        setGameOver(true);
        setOverMessage("It's a draw!");
      }
      return box;
    });
  };

  return (
    <>
      <h2>{overMessage}</h2>
      <div id="game-board">
        {boxArray.map((box, index) => {
          return (
            <button
              disabled={gameOver ? 'disabled' : disabled[index]}
              className="box"
              key={index}
              onClick={() => handleClick(index)}
            >
              <h1>{box}</h1>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Board;
