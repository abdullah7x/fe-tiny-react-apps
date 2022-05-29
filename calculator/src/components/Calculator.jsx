import React, { useState } from 'react';

function Calculator() {
  const [answer, setAnswer] = useState('0');
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
      setAnswer('0');
    } else if (button === 'C') {
      setAnswer('0');
    } else if (button === 'Back') {
      if (answer.length > 1) {
        setAnswer((answer) => {
          const newAnswer = answer?.slice(0, -1);
          return newAnswer.toString();
        });
      }
    } else if (button === '+/-') {
      setAnswer((answer) => {
        // turn number into a negative number

        // if there is a / or X, only turn the number after it negative
        if (answer?.includes('/')) {
          const arrayAnswer = answer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('/');
          if (arrayAnswer[lastIndex + 1] === '-') {
            delete arrayAnswer[lastIndex + 1];
            return arrayAnswer.join('');
          } else {
            arrayAnswer.splice(lastIndex + 1, 0, '-');
            const newAnswer = arrayAnswer.join('');
            return newAnswer;
          }
        } else if (answer?.includes('*')) {
          const arrayAnswer = answer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('*');
          arrayAnswer.splice(lastIndex + 1, 0, '-');
          const newAnswer = arrayAnswer.join('');
          return newAnswer;
        } else if (answer?.includes('-')) {
          const arrayAnswer = answer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('-');
          if (lastIndex !== 0) {
            arrayAnswer.splice(lastIndex + 1, 0, '-');
            const newAnswer = arrayAnswer.join('');
            return newAnswer;
          } else {
            delete arrayAnswer[lastIndex];
            return arrayAnswer.join('');
          }
        } else {
          if (answer[0] === '-') {
            const newAnswer = answer.slice(1);
            return newAnswer;
          } else {
            const newAnswer = answer * -1;
            return newAnswer.toString();
          }
        }
      });
    } else if (button === '=') {
      setAnswer((answer) => {
        const newAnswer = eval(answer);
        return newAnswer.toString();
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
    setAnswer((currAnswer) => {
      if (currAnswer[0] === '0') {
        const newAnswer = currAnswer?.slice(1);
        return newAnswer;
      } else return currAnswer;
    });
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
