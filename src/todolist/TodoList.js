import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (task.trim() === "") {
      alert("task cannot be empty");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index] || "");
  };

  const saveTask = (index) => {
    if (editText.trim() === "") {
      alert("tasks cannot be empty");
      return;
    }
    setTasks(tasks.map((prev, i) => (i === index ? editText : prev)));
    setEditIndex(null);
    setEditText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>TO-DO LIST</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          style={{
            padding: "8px",
            width: "250px",
            border: "2px solid #333",
            borderRadius: "5px",
            marginRight: "5px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: "#4caf50",
            color: "white",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "10px",
              margin: "8px auto",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            {t}
            <div>
              <button
                onClick={() => editTask(index)}
                style={{
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#fdd835",
                  color: "black",
                  marginRight: "5px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#e57373",
                  color: "white",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editIndex !== null && (
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit task..."
            style={{
              padding: "8px",
              width: "250px",
              border: "2px solid #333",
              borderRadius: "5px",
              marginRight: "5px",
            }}
          />
          <button
            onClick={() => saveTask(editIndex)}
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: "#4caf50",
              color: "white",
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
