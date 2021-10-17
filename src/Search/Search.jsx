import React from 'react'
import './Search.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Search() {
    return (
        <div className="searchContainer">
            <input placeholder="Search" type="text" name="search" id="" />
            <AiOutlineSearch color="#A3A3A3"/>
        </div>
    )
}

export default Search

