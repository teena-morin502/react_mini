import React, { useState } from "react";

function Card({ idx, name }) {
  const colors = {
    1: "red",
    2: "blue",
    3: "purple",
    4: "pink",
    5: "orange",
  };

  const defaultColor = "grey";
  const [bgColor, setBgColor] = useState(defaultColor);

  const handleClick = () => {
    document.querySelectorAll(".bg").forEach((card) => {
      card.style.background = defaultColor;
    });

    event.target.style.background = colors[idx] || defaultColor;
  };
  return (
    <div
      className="bg"
      onClick={handleClick}
      style={{
        background: bgColor,
        border: "2px solid grey",
        width: "150px",
        padding: "20px",
        margin: "30px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{name}</p>
        <h2>{idx}</h2>
      </div>
    </div>
  );
}

export default Card;
