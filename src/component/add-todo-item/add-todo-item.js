import React, { useState } from "react";

import "./add-todo-item.css";

const AddTodoItem = ({ addNewItem }) => {
	const [value, setValue] = useState("");
	const OnChangeValue = (e) => {
		setValue(e.target.value);
	};
	const addItem = (value) => {
		addNewItem(value);
		setValue("");
	};
	return (
		<div className="add-item">
			<input onChange={(e) => OnChangeValue(e)} value={value} />
			<button onClick={() => addItem(value)}>Add</button>
		</div>
	);
};
export default AddTodoItem;
