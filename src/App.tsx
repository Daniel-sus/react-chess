import React from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import EatenFiguresComponent from "./components/EatenFiguresComponent";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

const App = () => {
  const [board, setBoard] = React.useState(new Board());
  const [whitePlayer, setWhitePlayer] = React.useState(
    new Player(Colors.WHITE)
  );
  const [blackPlayer, setBlackPlayer] = React.useState(
    new Player(Colors.BLACK)
  );
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        swapPlayer={swapPlayer}
        currentPlayer={currentPlayer}
      />
      <EatenFiguresComponent
        lostWhiteFigures={board.eatenWhiteFigures}
        lostBlackFigures={board.eatenBlackFigures}
      />
    </div>
  );
};

export default App;
