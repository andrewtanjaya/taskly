import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import database from '../utils/database'

function AddCategory() {
    const [icon, setIcon] = useState("")
    const [title, setTitle] = useState("")
    const [data, setData] = useState()
    const[filtered, setFiltered] = useState([])
    const {currentUser} = useAuth()
    const history = useHistory()
    async function  addCategory(e){
        e.preventDefault()
        var valid = true

        if(data){
            for(var i = 0 ; i<data.category.length;i++){
                if(data.category[i].name === title) valid = false 
            }

            if(valid){
                var newData =
                    {
                        'icon': icon,
                        'name': title,
                        'task': []
                    }
                data.category.push(newData)
                database.createCategory(data, currentUser.uid)
                history.push( '/')
            }
            else{
                alert('Category Name Already Exist!')
            }
        }
    }

    useEffect(() => {
        database.getAllData(currentUser.uid).then((data)=>{
            setData(data) 
            console.log("done")
        })
    }, [currentUser.uid])


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
                        <input maxLength="15" placeholder="Must be less than 16 characters" type="text" onChange={(e)=>
                            {
                                
                            setTitle(e.target.value)}} name="title" id="" />
                    </div>
                    <button type="submit" onClick={(e)=>addCategory(e)}>Add Category !</button>
                </form>
                <Link to="/" className="backToHome"><b>Go Back To Home</b></Link>
            </div>
        </div>
    )
}

export default AddCategory
