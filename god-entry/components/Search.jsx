import React, { useState } from "react";

function Search() {
    const [searchText, setSearchText] = useState("Search Jokes Here");

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
        <div className="search">
            <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                />
        </div>
        </>
    );
}

export default Search;