import React, { useState } from 'react'
import './AccordionTask.css'
import {IoIosArrowDown} from 'react-icons/io'
import DetailAccordion from '../DetailAccordion/DetailAccordion'



function AccordionTask(props) {
    const [toggle, setToggle] = useState(false)
    function addRotateAnimation(i){
        const taskList = document.getElementById("taskList"+i)
        const arrow = document.getElementById("arrow"+i)
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
        <div className={"accTaskList"} id={"taskList"+props.identity}>
            <div className="accordionTask" onClick={()=>{
                            addRotateAnimation(props.identity)
                        }}>
                <div className="iconTask">
                    <p>{props.icon}</p>
                </div>
                
                <div className="accTaskTitle">
                    <p>{props.title}</p>
                    <div className="rightAccordion">
                        <p>{props.tasks.length} task(s)</p>
                        <IoIosArrowDown id={"arrow"+props.identity} size="16px"/>
                    </div>
                </div>
            </div>

            {
                props.tasks ? props.tasks.map((item,i)=><DetailAccordion key={i} icon={item.icon} title={item.title} time={(item.from.toDate().getHours() < 10 ? '0' +item.from.toDate().getHours() : item.from.toDate().getHours())+ ":" +(item.from.toDate().getMinutes() < 10 ? '0' +item.from.toDate().getMinutes() : item.from.toDate().getMinutes()) + " - " + (item.to.toDate().getHours() < 10 ? '0' +item.to.toDate().getHours() : item.to.toDate().getHours())+ ":" +(item.to.toDate().getMinutes() < 10 ? '0' +item.to.toDate().getMinutes() : item.to.toDate().getMinutes())}/> )
                : <p>No Task</p>
            }
            
            {/* <DetailAccordion icon="🚿" title="Take Shower" time="06.40 am - 07.20 am"/>
            <DetailAccordion icon="💻" title="Prepare Client Presentation" time="06.50 am - 03.00 pm"/> */}
        </div>
    )
}

export default AccordionTask
