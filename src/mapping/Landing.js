import React, { useState } from "react";
import Card from "./Card";

const ParentCard = () => {
  // assignin the array of objects
  // const data = [
  //   { id: 1, name: "Harry" },
  //   { id: 2, name: "Ron" },
  //   { id: 3, name: "Flitwick" },
  //   { id: 4, name: "Sirius" },
  //   { id: 5, name: "Ludo" },
  // ];

  const [data, setData] = useState([
    { id: 1, name: "Harry" },
    { id: 2, name: "Ron" },
    { id: 3, name: "Flitwick" },
    { id: 4, name: "Sirius" },
    { id: 5, name: "Ludo" },
  ]);

  return (
    <div>
      <div
        style={{
          border: "20px solid grey",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          return <Card 
          key={item.id} 
          name={item.name} 
          idx={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ParentCard;
