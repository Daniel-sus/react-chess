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
    <div
      style={{
        backgroundColor: "lightgray",
        display: "flex",
        flexDirection: "column",
        width: 200,
        height: 600,
      }}
    >
      <div style={{ height: "50vh", textAlign: "center" }}>
        <h3>Black figures</h3>
        {lostBlackFigures.map((figure, index) => (
          <div key={index}>
            {figure.name}
            {figure.logo && (
              <img style={{ width: 40, height: 40 }} src={figure.logo} />
            )}
          </div>
        ))}
      </div>
      <div style={{ height: "50vh", textAlign: "center" }}>
        <h3>White figures</h3>
        {lostWhiteFigures.map((figure, index) => (
          <div key={index}>
            {figure.name}
            {figure.logo && (
              <img style={{ width: 40, height: 40 }} src={figure.logo} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EatenFiguresComponent;
