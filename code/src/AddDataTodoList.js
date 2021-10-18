import React, { useState, useEffect } from "react";
import TodoList from "TodoList";

const AddDataTodoList = () => {
	const [todos, setTodos] = useState();

	/* Install npx: npx json-server --watch data/data.json --port 8000 (to get a JSON-server) */

	useEffect(() => {
		fetch("http://localhost:8000/todo")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTodos(data);
			});
	}, []);

	return <div>{todos && <TodoList todos={todos} />}</div>;
};

export default AddDataTodoList;
