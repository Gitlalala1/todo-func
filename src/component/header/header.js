import React from "react";
import "./header.css";

const Header = ({ count, done }) => {
	return (
		<div className="header-app">
			<h2>This is my todo list</h2>
			<div>
				<span>Count:{count}</span>
				<span>Done:{done}</span>
			</div>
		</div>
	);
};
export default Header;
