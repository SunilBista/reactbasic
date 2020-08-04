import React from 'react';
import './searchBox.css';


const SearchBox = (props) => {
    const { handleSearchValueChange,placeholder } = props;
    return(
     <input
        type="search" 
        className="search"
        placeholder={placeholder}
        onChange={handleSearchValueChange} 
    />
    );


}

export default SearchBox;