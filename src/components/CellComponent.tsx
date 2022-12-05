import React from "react";
import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ backgroundColor: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className="available"></div>}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};

export default CellComponent;
