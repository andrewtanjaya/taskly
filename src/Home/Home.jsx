import React from 'react'
import HomeContent from '../HomeContent/HomeContent'
import {RiMenu2Fill} from 'react-icons/ri'
import './Home.css'
import { useAuth } from '../Context/AuthContext'
import { MdAdd } from 'react-icons/md'



function Home() {
    const {logout } = useAuth()
    return (
        <div className="homeBg">
            <div className="miniMenu">
                <RiMenu2Fill/>
            </div>
            
            <div className="homeContainer">
                <HomeContent/>
            </div>
            
            <div className="floatingButtonContainer">
                <span class="tooltiptext">Add Morning Meeting Task Here</span>
                <div className="addTaskFloatingButton">
                    <MdAdd/>
                </div>
            </div>

            
            {/* <pre>{JSON.stringify(currentUser, null, 2)}</pre> */}
            <button onClick={(e)=>logout()}> Logout</button>

        </div>
    )
}

export default Home
