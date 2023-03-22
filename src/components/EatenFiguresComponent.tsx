import React from "react";
import { Figure } from "../models/figures/Figure";

interface PropsTypes {
  lostWhiteFigures: Figure[];
  lostBlackFigures: Figure[];
}

const EatenFiguresComponent: React.FC<PropsTypes> = ({
  lostBlackFigures,
  lostWhiteFigures,
}) => {
  console.log({ lostBlackFigures, lostWhiteFigures });
  return (
    <div className="battleLogWrapper">
      <div className="columnWrapper">
        <h3 className="columnName">Black figures</h3>
        <div className="log">
          {lostBlackFigures.map((figure, index) => (
            <div className="element" key={index}>
              {figure.name}
              {figure.logo && (
                <img style={{ width: 40, height: 40 }} src={figure.logo} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="columnWrapper">
        <h3 className="columnName">White figures</h3>
        <div className="log">
          {lostWhiteFigures.map((figure, index) => (
            <div className="element" key={index}>
              {figure.name}
              {figure.logo && (
                <img style={{ width: 40, height: 40 }} src={figure.logo} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EatenFiguresComponent;
