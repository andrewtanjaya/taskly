import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './AddTask.css'
// import { useParams } from 'react-router-dom'

function AddTask() {
    // const [searchParams, setSearchParams] = useParams(); 
    // const cat = searchParams.get('cat')
    let params = new URLSearchParams(useLocation().search);
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        console.log(params.get('cat'))
        if(!params.get('cat')){
            history.push(location.state?.from ?? '/')
        }
    }, [])

    return (
        <div className="addTaskBg">
            
            <div className="taskContainer">
                <form action="">
                    <h2>Add Task "{params.get('cat')}"</h2>
                    <div className="iconInput">
                        <label>Input Your Task Icon</label>
                        <input maxLength="1" placeholder="use ⌃ + ⌘ + space or win + ." name="" id="" />
                    </div>
                    <div className="taskTitleInput">
                        <label>Input Your Task Title</label>
                        <input maxLength="15" placeholder="Must be less than 16 characters" type="text" name="" id="" />
                    </div>
                    <div className="taskDateInput">
                        <label>Input Your Task Due Date</label>
                        <p>Date</p>
                        <input  type="date" name="" id="" />
                        <div className="timeContainer">
                        <p>From</p>
                        <input  type="time" name="" id="" />
                        <p>To</p>
                        <input  type="time" name="" id="" />
                        </div>
                    </div>
                    <button type="submit">Add Task !</button>
                </form>
                <Link to="/" className="backToHome"><b>Go Back To Home</b></Link>
            </div>
        </div>
    )
}

export default AddTask
