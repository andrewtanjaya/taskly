import React from 'react'
import './TaskCard.css'
import {TiDelete} from 'react-icons/ti'
import {MdModeEditOutline} from 'react-icons/md'
import { IoIosCheckmarkCircle } from 'react-icons/io'

function TaskCard(props) {
    return (
        <div className="taskCardContainer">
            <div className="iconTaskCard">
                <p>{props.icon}</p>
            </div>
            <div className="taskCardDetail">
                <p><b>{props.title}</b></p>
                <p>{props.date}</p>
                <p>{props.time}</p>
            </div>
            <div className="actionButton">
                <IoIosCheckmarkCircle color="#6CBF74" size="26px" onClick={(e)=>props.deleteTask(e,props.activeCat,props.title, true)} />
                <TiDelete color="#FF5858" size="30px" onClick={(e)=>props.deleteTask(e,props.activeCat,props.title, false)}/>
            </div>
        </div>
    )
}

export default TaskCard
