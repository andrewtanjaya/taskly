import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import './SideNav.css'
import logo from '../Assets/taskly-logo.png'
import { useAuth } from '../Context/AuthContext'


function SideNav() {
    const {logout } = useAuth()
    const {currentUser } = useAuth()
    
    function toggleSideBar(){
        document.getElementById("blurBg").classList.add('hideSideBar')
    }

    return (
        <div className="blurBg " id="blurBg">
            <div className="sideNavWrapper">
                <div className="logoSideBar">
                    <RiCloseFill onClick={()=>toggleSideBar()} size="20px"/>
                    <p><b>task.ly</b></p>
                </div>
                <div className="userDetail">
                {/* <img className="photoProfile" src={currentUser.photoURL} alt="" /> */}
                    {
                        currentUser.photoURL=== null ? <img className="photoProfile" src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png" alt="" />:
                        <img className="photoProfile"  src={currentUser.photoURL} alt="" />
                    }
                    <div className="userStatus">
                        <p><b>{currentUser.displayName}</b></p>
                        <p>Exp : 37 / 100</p>
                    </div>
                </div>

                <div className="menuWrapper">
                    <div className="menu1">
                        <pre>Completed Task     7</pre>
                    </div>
                    <div className="menu1">
                        <pre>Failed Task                7</pre>
                    </div>
                    <div className="menu1">
                        <pre>Current Rank            7</pre>
                    </div>
                </div>

                <div className="logoutBut">
                    <button onClick={(e)=>logout()}> Logout</button>
                </div>
            </div>
            
        </div>
    )
}

export default SideNav
