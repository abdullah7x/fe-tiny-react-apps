import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator() {
  const [answer, setAnswer] = useState('0');
  const buttons = [
    'AC',
    '%',
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
      if (button === 'AC') {
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
        const percentageCheck = newAnswer.lastIndexOf('%');
        if (
          percentageCheck > divideCheck &&
          percentageCheck > multiplyCheck &&
          percentageCheck > subtractCheck &&
          percentageCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          if (arrayAnswer[percentageCheck + 1 === '-']) {
            delete arrayAnswer[percentageCheck + 1];
          } else {
            arrayAnswer.splice(percentageCheck + 1, 0, '-');
          }
          return arrayAnswer.join('');
        }
        if (
          divideCheck > multiplyCheck &&
          divideCheck > subtractCheck &&
          divideCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          if (arrayAnswer[divideCheck + 1] === '-') {
            delete arrayAnswer[divideCheck + 1];
          } else {
            arrayAnswer.splice(divideCheck + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else if (
          multiplyCheck > divideCheck &&
          multiplyCheck > subtractCheck &&
          multiplyCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          if (arrayAnswer[multiplyCheck + 1] === '-') {
            delete arrayAnswer[multiplyCheck + 1];
            return arrayAnswer.join('');
          } else {
            arrayAnswer.splice(multiplyCheck + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else if (
          subtractCheck > divideCheck &&
          subtractCheck > multiplyCheck &&
          subtractCheck > addCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          if (subtractCheck === 0) {
            return arrayAnswer.slice(1).join('');
          } else if (arrayAnswer[subtractCheck + 1] === '-') {
            delete arrayAnswer[<sub></sub> + 1];
          } else if (
            arrayAnswer[subtractCheck - 1] === '-' ||
            arrayAnswer[subtractCheck - 1] === '*' ||
            arrayAnswer[subtractCheck - 1] === '+' ||
            arrayAnswer[subtractCheck - 1] === '/'
          ) {
            delete arrayAnswer[subtractCheck];
          } else {
            arrayAnswer.splice(subtractCheck + 1, 0, '-');
          }
          return arrayAnswer.join('');
        } else if (
          addCheck > divideCheck &&
          addCheck > multiplyCheck &&
          addCheck > subtractCheck
        ) {
          const arrayAnswer = newAnswer.split('');
          if (arrayAnswer[addCheck + 1] === '-') {
            delete arrayAnswer[addCheck + 1];
          } else {
            arrayAnswer.splice(addCheck + 1, 0, '-');
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
        let decimalCounter = 0;
        for (let i = 0; i < newAnswer.length; i++) {
          if (newAnswer[i] === '.') decimalCounter = 1;
          if (
            newAnswer[i] === '+' ||
            newAnswer[i] === '-' ||
            newAnswer[i] === '*' ||
            newAnswer[i] === '/'
          ) {
            decimalCounter = 0;
          }
        }
        if (decimalCounter === 1) {
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
        currAnswer.endsWith('++') ||
        currAnswer.endsWith('---') ||
        currAnswer.endsWith('**') ||
        currAnswer.endsWith('//') ||
        currAnswer.endsWith('%%')
      ) {
        return currAnswer.slice(0, -1);
      }
      if (
        currAnswer.startsWith('0/') ||
        currAnswer.startsWith('0*') ||
        currAnswer.startsWith('0-') ||
        currAnswer.startsWith('0+') ||
        currAnswer.startsWith('0.') ||
        currAnswer.startsWith('0%')
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
