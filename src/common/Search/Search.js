import React  from 'react';
import './Search.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Search = () => (
    <div className = "search">
        <input 
            type = "search" 
            placeholder = "Search">
        </input>
        <FontAwesomeIcon icon = "search"/>
    </div>
)
export default Search


