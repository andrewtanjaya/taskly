import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import database from '../utils/database';
import './AddTask.css'
// import { useParams } from 'react-router-dom'

function AddTask() {
    const {currentUser} = useAuth()
    // const [searchParams, setSearchParams] = useParams(); 
    // const cat = searchParams.get('cat')
    const [icon, setIcon] = useState("")
    const [title, setTitle] = useState("")
    const [from, setFrom] = useState()
    const [to, setTo] = useState()

    let params = new URLSearchParams(useLocation().search);
    const history = useHistory()
    const location = useLocation()
    

    useEffect(() => {
        console.log(params.get('cat'))
        if(!params.get('cat')){
            history.push(location.state?.from ?? '/')
        }
    }, [])

    function addNewTask(e){
        e.preventDefault()
        console.log(title, from, to, icon)
        let data= {
            title: title,
            icon: icon,
            from: from,
            to: to
        }
        database.addTask(data,"new cat 2", currentUser)
    }

    return (
        <div className="addTaskBg">
            
            <div className="taskContainer">
                <form action="">
                    <h2>Add Task "{params.get('cat')}"</h2>
                    <div className="iconInput">
                        <label>Input Your Task Icon</label>
                        <input  placeholder="use ⌃ + ⌘ + space or win + ." name="" id="" onChange={(e)=>setIcon(e.target.value)} />
                    </div>
                    <div className="taskTitleInput">
                        <label>Input Your Task Title</label>
                        <input maxLength="15" placeholder="Must be less than 16 characters" type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="taskDateInput">
                        <label>Input Your Task Due Date</label>
                        <div className="timeContainer">
                        <p>From</p>
                        <input  type="datetime-local" name="" id="" onChange={(e)=>setFrom(e.target.value)} />
                        <p>To</p>
                        <input  type="datetime-local" name="" id="" onChange={(e)=>setTo(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" onClick={(e)=>{addNewTask(e)}}>Add Task !</button>
                </form>
                <Link to="/" className="backToHome"><b>Go Back To Home</b></Link>
            </div>
        </div>
    )
}

export default AddTask
