import React from 'react'
import AccordionTask from '../AccordionTask/AccordionTask'
import { useAuth } from '../Context/AuthContext'
import Search from '../Search/Search'
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

            <AccordionTask/>
        </div>
    )
}

export default HomeContent
