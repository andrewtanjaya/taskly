import React from 'react'
import './DetailAccordion.css'
import {IoIosCheckmarkCircle} from 'react-icons/io'

function DetailAccordion() {
    return (
        <div className="detailAccordionContainer">
            <div className="iconDetailTask">
                    <p>🛌</p>
                </div>
                
                <div className="accTaskTitle">
                    <div className="taskDetail">
                        <p>Wake Up!</p>
                        <p>06.30 am - 07.00 am</p>
                    </div>
                    
                    <div className="rightAccordion">
                        <IoIosCheckmarkCircle color="#6CBF74" size="24px"/>
                    </div>
                </div>
        </div>
    )
}

export default DetailAccordion
