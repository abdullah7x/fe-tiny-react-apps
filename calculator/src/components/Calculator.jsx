import React, { useState } from 'react';
import { evaluate } from 'mathjs';

// add error handling to stop user from entering two operators in a row

function Calculator() {
  const [answer, setAnswer] = useState('0');
  const buttons = [
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
  ];
  const handleClick = (button) => {
    setAnswer((currAnswer) => {
      const newAnswer = currAnswer;
      if (button === 'CE') {
        return '0';
      } else if (button === 'C') {
        return '0';
      } else if (button === 'Back') {
        if (newAnswer.length > 1) {
          return newAnswer.slice(0, -1);
        } else return '0';
      } else if (button === '+/-') {
        const divideCheck = newAnswer.lastIndexOf('/');
        const multiplyCheck = newAnswer.lastIndexOf('*');
        const subtractCheck = newAnswer.lastIndexOf('-');
        const addCheck = newAnswer.lastIndexOf('+');
        if (
          divideCheck > multiplyCheck &&
          divideCheck > subtractCheck &&
          divideCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('/');
          if (arrayAnswer[lastIndex + 1] === '-') {
            delete arrayAnswer[lastIndex + 1];
          } else {
            arrayAnswer.splice(lastIndex + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else if (
          multiplyCheck > divideCheck &&
          multiplyCheck > subtractCheck &&
          multiplyCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('*');
          if (arrayAnswer[lastIndex + 1] === '-') {
            delete arrayAnswer[lastIndex + 1];
            return arrayAnswer.join('');
          } else {
            arrayAnswer.splice(lastIndex + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else if (
          subtractCheck > divideCheck &&
          subtractCheck > multiplyCheck &&
          subtractCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('-');
          if (lastIndex === 0) {
            return arrayAnswer.slice(1).join('');
          } else if (arrayAnswer[lastIndex + 1] === '-') {
            delete arrayAnswer[lastIndex + 1];
          } else if (
            arrayAnswer[lastIndex - 1] === '-' ||
            arrayAnswer[lastIndex - 1] === '*' ||
            arrayAnswer[lastIndex - 1] === '+' ||
            arrayAnswer[lastIndex - 1] === '/'
          ) {
            delete arrayAnswer[lastIndex];
          } else {
            arrayAnswer.splice(lastIndex + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else if (
          addCheck > divideCheck &&
          addCheck > multiplyCheck &&
          addCheck > subtractCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          const lastIndex = arrayAnswer.lastIndexOf('+');
          if (arrayAnswer[lastIndex + 1] === '-') {
            delete arrayAnswer[lastIndex + 1];
          } else {
            arrayAnswer.splice(lastIndex + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else {
          const sum = newAnswer * -1;
          return sum.toString();
        }
      } else if (button === '=') {
        const sum = evaluate(newAnswer);
        return sum?.toString();
      } else if (button === 'X') {
        return newAnswer + '*';
      } else if (button === '.') {
        if (newAnswer.includes('.')) {
          return newAnswer;
        } else {
          return newAnswer + '.';
        }
      } else {
        return newAnswer + button;
      }
    });
    setAnswer((currAnswer) => {
      if (
        currAnswer.startsWith('0/') ||
        currAnswer.startsWith('0*') ||
        currAnswer.startsWith('0-') ||
        currAnswer.startsWith('0+') ||
        currAnswer.startsWith('0.')
      ) {
        return currAnswer;
      }
      if (currAnswer !== '0' && currAnswer[0] === '0') {
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
