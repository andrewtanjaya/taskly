import React, { useState } from 'react'
import './AccordionTask.css'
import {IoIosArrowDown} from 'react-icons/io'
import DetailAccordion from '../DetailAccordion/DetailAccordion'



function AccordionTask(props) {
    const [toggle, setToggle] = useState(false)
    function addRotateAnimation(e){
        const taskList = document.getElementById("taskList")
        const arrow = document.getElementById("arrow")
        if(toggle){
            arrow.classList.remove('rotateUp')
            taskList.classList.remove('show')
        }else{
            arrow.classList.add('rotateUp')
            taskList.classList.add('show')
        }
        
        setToggle(!toggle)
        
    }
    return (
        <div className="accTaskList" id="taskList">
            <div className="accordionTask" onClick={()=>{
                            addRotateAnimation()
                        }}>
                <div className="iconTask">
                    <p>{props.icon}</p>
                </div>
                
                <div className="accTaskTitle">
                    <p>{props.title}</p>
                    <div className="rightAccordion">
                        <p>3 tasks</p>
                        <IoIosArrowDown id="arrow" size="16px"/>
                    </div>
                </div>
            </div>
            <DetailAccordion icon="🛌" title="Wake Up!" time="06.30 am - 07.00 am"/>
            <DetailAccordion icon="🚿" title="Take Shower" time="06.40 am - 07.20 am"/>
            <DetailAccordion icon="💻" title="Prepare Client Presentation" time="06.50 am - 03.00 pm"/>
        </div>
    )
}

export default AccordionTask
