import React from 'react'
import './AccordionTask.css'
import {IoIosArrowDown} from 'react-icons/io'
import DetailAccordion from '../DetailAccordion/DetailAccordion'

function AccordionTask() {
    return (
        <div className="accTaskList">
            <div className="accordionTask">
                <div className="iconTask">
                    <p>🌤</p>
                </div>
                
                <div className="accTaskTitle">
                    <p>Morning Meeting</p>
                    <div className="rightAccordion">
                        <p>3 tasks</p>
                        <IoIosArrowDown size="16px"/>
                    </div>
                </div>
            </div>
            <DetailAccordion/>
        </div>
    )
}

export default AccordionTask
