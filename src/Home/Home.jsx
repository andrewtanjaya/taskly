import React from 'react'
import { useAuth } from '../Context/AuthContext'
import './Home.css'

function Home() {
    const {currentUser, logout } = useAuth()
    return (
        <div>
            <h1>Home </h1>
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            <button onClick={(e)=>logout()}> Logout</button>

        </div>
    )
}

export default Home
