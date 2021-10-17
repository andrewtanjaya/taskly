import React from 'react'
import { useAuth } from '../Context/AuthContext'
import HomeContent from '../HomeContent/HomeContent'
import Search from '../Search/Search'
import './Home.css'

function Home() {
    const {currentUser, logout } = useAuth()
    return (
        <div className="homeBg">
            <div className="homeContainer">
                <HomeContent/>
            </div>
            
{/*             
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            <button onClick={(e)=>logout()}> Logout</button> */}

        </div>
    )
}

export default Home
