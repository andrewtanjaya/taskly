import React from 'react'
import './CategoryCard.css'

function CategoryCard(props) {
    return (
        <div className={"categoryContainer " + (props.isActive==="true" ? 'categoryActive' : '' )}>
            <div className="iconCategory">
                <p>{props.icon}</p>
            </div>
            <div className="categoryDetail">
                <p><b>{props.title}</b></p>
                <p>12 Tasks</p>
            </div>
        </div>
    )
}

export default CategoryCard
