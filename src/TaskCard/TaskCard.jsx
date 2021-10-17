import React from 'react'
import './TaskCard.css'
import {TiDelete, TiEdit} from 'react-icons/ti'
import {MdModeEditOutline} from 'react-icons/md'

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
                <div className="editIcon">
                    <MdModeEditOutline color="#FFFFFF" size="12px"/>
                </div>
                <TiDelete color="#FF5858" size="30px"/>
            </div>
        </div>
    )
}

export default TaskCard
