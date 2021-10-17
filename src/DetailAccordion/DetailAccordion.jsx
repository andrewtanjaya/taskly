import React from 'react'
import './DetailAccordion.css'
import {IoIosCheckmarkCircle} from 'react-icons/io'

function DetailAccordion(props) {
    return (
        <div className="detailAccordionContainer">
            <div className="iconDetailTask">
                    <p>{props.icon}</p>
                </div>
                
                <div className="accTaskTitle">
                    <div className="taskDetail">
                        <p>{props.title}</p>
                        <p>{props.time}</p>
                    </div>
                    
                    <div className="rightAccordion">
                        <IoIosCheckmarkCircle color="#6CBF74" size="24px"/>
                    </div>
                </div>
        </div>
    )
}

export default DetailAccordion
