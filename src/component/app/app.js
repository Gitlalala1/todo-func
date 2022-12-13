import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./app.css";

import Header from "../header";
import TodoList from "../todo-list";
import AddTodoItem from "../add-todo-item";
import SearchItem from "../search-item";
import FilterItem from "../filter-item";
const App = () => {
	const newItem = (label, id) => {
		return {
			id: id,
			label,
			important: false,
			done: false,
		};
	};

	const [state, setTodo] = useState({
		todoItem: [
			newItem("Wake Up", 1),
			newItem("drink beer", 2),
			newItem("Sleep", 3),
		],
		search: "",
		filter: "all",
	});

	const addNewItem = (label) => {
		setTodo((state) => {
			return {
				...state,
				todoItem: [
					...state.todoItem,
					newItem(label, state.todoItem.slice(-1)[0].id + 1),
				],
			};
		});
	};

	const setToggle = (id, propName) => {
		const idx = state.todoItem.findIndex((item) => item.id == id);
		const newItem = {
			...state.todoItem[idx],
			[propName]: !state.todoItem[idx][propName],
		};
		setTodo((state) => {
			return {
				...state,
				todoItem: [
					...state.todoItem.slice(0, idx),
					newItem,
					...state.todoItem.slice(idx + 1),
				],
			};
		});
	};

	const setImportant = (id) => {
		setToggle(id, "important");
	};
	const setDone = (id) => {
		setToggle(id, "done");
	};
	const deleteItem = (id) => {
		const todoItem = state.todoItem;
		const idx = todoItem.findIndex((item) => item.id == id);
		setTodo((state) => {
			return {
				...state,
				todoItem: [...todoItem.slice(0, idx), ...todoItem.slice(idx + 1)],
			};
		});
	};
	const searchItem = (value) => {
		setTodo({
			...state,
			search: value,
		});
	};
	const getSearchItems = (state) => {
		if (state.search === "") return state.todoItem;
		const items = state.todoItem.filter((item) =>
			item.label.includes(state.search)
		);
		return items;
	};
	const setFilter = (value) => {
		setTodo((state) => {
			return {
				...state,
				filter: value,
			};
		});
	};
	const filter = (data, value) => {
		switch (value) {
			case "all":
				return data;
			case "active":
				return data.filter((item) => !item.done);
			case "done":
				return data.filter((item) => item.done);
		}
	};
	const visibleIItems = filter(getSearchItems(state), state.filter);
	console.log(visibleIItems);
	return (
		<div className="block-todo">
			<Header count={3} done={5} />
			<div className="filter-panel">
				<SearchItem searchItem={(value) => searchItem(value)} />
				<FilterItem setFilter={(value) => setFilter(value)} />
			</div>
			<TodoList
				setImportant={(id) => setImportant(id)}
				setDone={(id) => setDone(id)}
				deleteItem={(id) => deleteItem(id)}
				data={visibleIItems}
			/>
			<AddTodoItem addNewItem={(value) => addNewItem(value)} />
		</div>
	);
};
export default App;
