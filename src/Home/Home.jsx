import React from 'react'
import { useAuth } from '../Context/AuthContext'
import './Home.css'

function Home() {
    const {currentUser, logout } = useAuth()
    return (
        <div>
            <h1>Home {JSON.stringify(currentUser, null, 2)}</h1>
            <button onClick={(e)=>logout()}> Logout</button>

        </div>
    )
}

export default Home
