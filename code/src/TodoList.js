import React, { useState, useEffect } from "react";



const TodoList = ({todos}) => {


const [todo, setTodo] = useState()


return (
      
<div className="todo-list"> 
{todos.map((todo) => (
<div className="todoPre" key={todo.id}>
    <div className="todoPreDiv">
<p>{todo.check} </p>
    <p> {todo.time} </p>
    <p> {todo.location}</p> 
    </div>
<h3> {todo.title} </h3>
<p>To do:  {todo.task}</p>
</div>
))}

</div>
    )




}

export default TodoList
