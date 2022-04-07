import { WORDS } from './words';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1> Wordle Clone </h1>

      <div id="game-board">
        <InitBoard></InitBoard>
      </div>
      <CreateKeyboard></CreateKeyboard>
    </div>
  );
}

const InitBoard = (props) => {
  const oneGuess = (
    <div className="letter-row">
      <div className="letter-box"></div>
      <div className="letter-box"></div>
      <div className="letter-box"></div>
      <div className="letter-box"></div>
      <div className="letter-box"></div>
    </div>
  );

  const emptyBoard = ['', '', '', '', ''];

  return emptyBoard.map((string) => {
    return (string = oneGuess);
  });
};

const CreateKeyboard = (props) => {
  return (
    <div id="keyboard-cont">
      <div class="first-row">
        <button class="keyboard-button">q</button>
        <button class="keyboard-button">w</button>
        <button class="keyboard-button">e</button>
        <button class="keyboard-button">r</button>
        <button class="keyboard-button">t</button>
        <button class="keyboard-button">y</button>
        <button class="keyboard-button">u</button>
        <button class="keyboard-button">i</button>
        <button class="keyboard-button">o</button>
        <button class="keyboard-button">p</button>
      </div>
      <div class="second-row">
        <button class="keyboard-button">a</button>
        <button class="keyboard-button">s</button>
        <button class="keyboard-button">d</button>
        <button class="keyboard-button">f</button>
        <button class="keyboard-button">g</button>
        <button class="keyboard-button">h</button>
        <button class="keyboard-button">j</button>
        <button class="keyboard-button">k</button>
        <button class="keyboard-button">l</button>
      </div>
      <div class="third-row">
        <button class="keyboard-button">Del</button>
        <button class="keyboard-button">z</button>
        <button class="keyboard-button">x</button>
        <button class="keyboard-button">c</button>
        <button class="keyboard-button">v</button>
        <button class="keyboard-button">b</button>
        <button class="keyboard-button">n</button>
        <button class="keyboard-button">m</button>
        <button class="keyboard-button">Enter</button>
      </div>
    </div>
  );
};

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(rightGuessString);

export default App;
