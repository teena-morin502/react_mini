import React from "react";

function Details({ myName, changeName, myAge, myNumber }) {
  return (
    <section>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>{myName}</div>
      <div>{myAge}</div>
      <div>{myNumber}</div>
    </section>
  );
}

export default Details;
