import React, { useState } from "react";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    food:""
  });
  const handleSubmit= ()=>{
     console.log(data)

  }
  return (
    <div
      style={{
        placeItems: "center",
        height: "700px",
        margin: "0",
        gap:"30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          alignItems: "center",
          height: "500px",
          width: "400px",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "0px",
          marginTop: "100px",
          textAlign: "center",
          placeItems: "center",
        }}
      >
        <h1>Event Form</h1>
        <input
          className="formInput"
          type="text"
          onChange={(e) => {
            setData((pre) => {
              return {
                ...pre,
                name: e.target.value,
              };
            });
          }}
          placeholder="name"
        />
        <br />
        <input
          className="formInput"
          type="email"
          onChange={(e) => {
            setData((pre) => {
              return {
                ...pre,
                email: e.target.value,
              };
            });
          }}
          placeholder="Email id"
        />
        <br />
        <input
          className="formInput"
          type="number"
          onChange={(e) => {
            setData((pre) => {
              return {
                ...pre,
                number: e.target.value,
              };
            });
          }}
          placeholder="Phone number"
        />
        <br />
        <input
          className="formInput"
          type="text"
          onChange={(e) => {
            setData((pre) => {
              return {
                ...pre,
                city: e.target.value,
              };
            });
          }}
          placeholder="city"
        />
        <br />
        <select name="food" id="food" onChange={(e) => {
            setData((pre) => {
              return {
                ...pre,
                food: e.target.value,
              };
            });
          }}>
        <option value="choose your option">choose your option</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <br />
        <button className="submitBtn" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
};
export default Form;