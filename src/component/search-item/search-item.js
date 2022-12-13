import React, { useState, useMemo, useCallback } from "react";

const SearchItem = ({ searchItem }) => {
	const [value, setValue] = useState("");
	const getValue = (e) => {
		setValue(e.target.value);
		searchItem(e.target.value);
	};

	return <input type="text" onChange={(e) => getValue(e)} value={value} />;
};
export default SearchItem;
