import React, { useState } from 'react';

function Calculator() {
  const [answer, setAnswer] = useState(0);
  const [buttons, setButtons] = useState([
    'CE',
    'C',
    'Back',
    '/',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
    '=',
  ]);
  const handleClick = (button) => {
    if (button === 'CE') {
      setAnswer(0);
    } else if (button === 'C') {
      setAnswer(0);
    } else if (button === 'Back') {
      if (answer.length > 1) {
        setAnswer((answer) => {
          const newAnswer = answer?.slice(0, -1);
          return newAnswer;
        });
      }
    } else if (button === '+/-') {
      setAnswer((answer) => {
        const newAnswer = answer * -1;
        return newAnswer;
      });
    } else if (button === '=') {
      setAnswer((answer) => {
        const newAnswer = eval(answer);
        return newAnswer;
      });
    } else if (button === '+') {
      setAnswer((answer) => {
        const newAnswer = answer + '+';
        return newAnswer;
      });
    } else if (button === '-') {
      setAnswer((answer) => {
        if (answer === 0) {
          const newAnswer = '-';
          return newAnswer;
        } else {
          const newAnswer = answer + '-';
          return newAnswer;
        }
      });
    } else if (button === 'X') {
      setAnswer((answer) => {
        const newAnswer = answer + '*';
        return newAnswer;
      });
    } else if (button === '/') {
      setAnswer((answer) => {
        const newAnswer = answer + '/';
        return newAnswer;
      });
    } else if (button === '.') {
      setAnswer((answer) => {
        const newAnswer = answer + '.';
        return newAnswer;
      });
    } else if (button === 0) {
      setAnswer((answer) => {
        const newAnswer = answer * 10;
        return newAnswer;
      });
    } else {
      setAnswer((answer) => {
        if (answer === 0) {
          return button;
        } else {
          const newAnswer = answer + button;
          return newAnswer;
        }
      });
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{answer}</div>
      <div className="calculator-buttons">
        {buttons.map((button, index) => {
          return (
            <button
              onClick={() => {
                handleClick(button);
              }}
              key={index}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
