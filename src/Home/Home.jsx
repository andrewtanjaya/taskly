import React from 'react'
import HomeContent from '../HomeContent/HomeContent'
import {RiMenu2Fill} from 'react-icons/ri'
import './Home.css'

function Home() {
    return (
        <div className="homeBg">
            <div className="miniMenu">
                <RiMenu2Fill/>
            </div>
            
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
