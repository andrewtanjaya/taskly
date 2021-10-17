import React, { useState } from 'react'
import AccordionTask from '../AccordionTask/AccordionTask'
import CategoryCard from '../CategoryCard/CategoryCard'
import { useAuth } from '../Context/AuthContext'
import Search from '../Search/Search'
import {MdAdd} from 'react-icons/md'
import './HomeContent.css'

function HomeContent() {

    const {currentUser } = useAuth()
    return (
        <div>
            <div className="header">
                <div className="greetMessage">
                    <h2>Hello {currentUser.displayName} 👋</h2>
                    <p>Welcome Back!</p>
                </div>
                <Search/>
            </div>
            <div className="divider1">
                <p>Today</p>
                <hr></hr>
            </div>

            <AccordionTask title="Morning Meeting" icon="🌤"/>
            <AccordionTask title="Birthday Party!" icon="🎉"/>

            <div className="divider1">
                <p>Category</p>
                <hr></hr>
            </div>

            <div className="categoryList">
                <CategoryCard title="Morning Meeting" icon="🌤" isActive="true"/>
                <CategoryCard title="Workout Routine" icon="💪" isActive="false"/>
                <CategoryCard title="Birthday Party!" icon="🎉" isActive="false" />

                <div className="addCategoryContainer">
                    <MdAdd/>
                </div>
            </div>

            <div className="divider1">
                <p>Morning Meeting</p>
                <hr></hr>
            </div>
        </div>
    )
}

export default HomeContent
