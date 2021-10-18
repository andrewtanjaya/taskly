import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import database from '../utils/database'

function AddCategory() {
    const [icon, setIcon] = useState("")
    const [title, setTitle] = useState("")
    const {currentUser} = useAuth()
    function addCategory(e){
        e.preventDefault()
        let data = {
            task:[],
            name: title,
            icon: icon
        }

        database.createCategory(data, currentUser.uid)
    }

    return (
        <div className="addTaskBg">
            <div className="taskContainer">
                <form action="">
                    <h2>Add New Category</h2>
                    <div className="iconInput">
                        <label>Input Your Category Icon</label>
                        <input  placeholder="use ⌃ + ⌘ + space or win + ." name="icon" id="" onChange={(e)=>setIcon(e.target.value)} />
                    </div>
                    <div className="taskTitleInput">
                        <label>Input Your Category Title</label>
                        <input maxLength="15" placeholder="Must be less than 16 characters" type="text" onChange={(e)=>setTitle(e.target.value)} name="title" id="" />
                    </div>
                    <button type="submit" onClick={(e)=>addCategory(e)}>Add Category !</button>
                </form>
                <Link to="/" className="backToHome"><b>Go Back To Home</b></Link>
            </div>
        </div>
    )
}

export default AddCategory
