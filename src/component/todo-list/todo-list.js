import React from "react";
import "./todo-list.css";

import TodoItem from "../todo-item";
const TodoList = ({ data, setImportant, setDone, deleteItem }) => {
	return (
		<ul className="todo__ul">
			{data.map((item, idx) => {
				return (
					<li key={idx}>
						<TodoItem
							setImportant={setImportant}
							setDone={setDone}
							deleteItem={deleteItem}
							data={item}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
