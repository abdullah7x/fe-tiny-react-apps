import { useState } from "react";

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
  const [paragraph, setParagraph] = useState("");
  const boxArray = ["", "", "", "", "", "", "", "", ""];
  return boxArray.map((box, index) => {
    return (
      <button className="box" key={index} onClick={() => setParagraph("X")}>
        {paragraph}
      </button>
    );
  });
};

export default App;
