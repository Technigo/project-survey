import React, { useState, useEffect } from "react";



const TodoList = ({todos}) => {


const [todo, setTodo] = useState()


return (
      
<div className="todo-list"> 
{todos.map((todo) => (
<div className="todo-pre" key={todo.id}>
    <p> {todo.time} </p>
    <p>{todo.check} </p>
<h2> {todo.title} </h2>
<p>Todo  {todo.task}</p>
<p>Where  {todo.location}</p> 
</div>
))}

</div>
    )




}

export default TodoList
