import React, { useState } from "react";

const FilterItem = ({ setFilter }) => {
	const [filter, setFilterState] = useState([
		{
			name: "all",
			label: "All",
		},
		{
			name: "active",
			label: "Active",
		},
		{
			name: "done",
			label: "Done",
		},
	]);
	return (
		<div>
			{filter.map((item, idx) => {
				return (
					<button onClick={() => setFilter(item.name)} key={idx}>
						{item.label}
					</button>
				);
			})}
		</div>
	);
};

export default FilterItem;
