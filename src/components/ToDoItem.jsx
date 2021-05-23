import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={isDone ? { textDecoration: "line-through" } : { color: "black" }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
