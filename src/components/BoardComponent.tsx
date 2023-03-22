import React, { useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);
  const lettersArray = ["A", "B", "C", "D", "E", "F", "G ", "H"];

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell?.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  React.useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <h3 className="currentPlayer">Current Player: {currentPlayer?.color}</h3>
      <div style={{ display: "flex" }}>
        <div className="board">
          {board.cells.map((row, index) => (
            <React.Fragment key={index}>
              {row.map((cell) => (
                <CellComponent
                  key={cell.id}
                  cell={cell}
                  selected={
                    cell.x === selectedCell?.x && cell.y === selectedCell?.y
                  }
                  click={click}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {lettersArray.map((letter, index) => (
            <div key={index} className="numbersFrame">
              {index}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex" }}>
        {lettersArray.map((letter, index) => (
          <div key={index} className="lettersFrame">
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
