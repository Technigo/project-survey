import React from "react";

const TodoAdd = ({
  todoTitle,
  todoTask,
  todoLocation,
  todoCheck,
  todoTime
}) => {
  console.log(todoTitle);

  return (
    <div className="box">
      <div className="todoPreDiv">
        <p> {todoCheck} </p>
        <p> {todoTime} </p>
        <p>{todoLocation} </p>
      </div>
      <h2 className="submitTitle">{todoTitle} </h2>
      <p className="toDotext"> To do: {todoTask} </p>
    </div>
  );
};

export default TodoAdd;
