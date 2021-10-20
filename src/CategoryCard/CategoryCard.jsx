import React from 'react'
import { TiDelete } from 'react-icons/ti'
import './CategoryCard.css'

function CategoryCard(props) {
    return (
        <div className={"categoryContainer " + (props.activeCat===props.title ? 'categoryActive' : '' )} onClick={()=>{props.changeCat(props.title)}}>
            <div className="iconCategory">
                <p>{props.icon}</p>
            </div>
            <div className="categoryDetail">
                <p><b>{props.title}</b></p>
                <p>{props.taskCount} Task(s)</p>
            </div>
            <TiDelete style={{zindex: "3" }} color={(props.activeCat===props.title ? "white" : "#FF5858")} size="30px" onClick={(e)=>props.deleteCat(e,props.title)}/>
        </div>
    )
}

export default CategoryCard
