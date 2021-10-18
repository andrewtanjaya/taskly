import React from 'react'
import HomeContent from '../HomeContent/HomeContent'
import {RiMenu2Fill} from 'react-icons/ri'
import './Home.css'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'



function Home() {
    function showSideBar(){
        document.getElementById("blurBg").classList.remove('hideSideBar')
    }
    return (
        <div className="homeBg">
            <div className="miniMenu">
                <RiMenu2Fill onClick={()=>showSideBar()}/>
            </div>
            
            <div className="homeContainer">
                <HomeContent/>
            </div>
            
            <div className="floatingButtonContainer" >
                <span className="tooltiptext">Add Morning Meeting Task Here</span>
                <Link to="/addTask?cat=morning meeting">
                <div className="addTaskFloatingButton">
                    <MdAdd/>
                </div>
                </Link>
                
            </div>

            
            {/* <pre>{JSON.stringify(currentUser, null, 2)}</pre> */}
            
            <SideNav/>

        </div>
    )
}

export default Home
