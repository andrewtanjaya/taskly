import React, { useEffect, useState } from 'react'
import HomeContent from '../HomeContent/HomeContent'
import {RiMenu2Fill} from 'react-icons/ri'
import './Home.css'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import database from '../utils/database'
import { useAuth } from '../Context/AuthContext'



function Home() {
    const [activeCat, setActiveCat] = useState("")
    const [data, setData] = useState()
    const {currentUser } = useAuth()

    useEffect(() => {
        database.getAllData(currentUser.uid).then((data)=>{
            if(data && data.category[0]){
                setActiveCat(data.category[0].name)
                setData(data)
            }
            else{
                database.register(currentUser.uid)
            }
        })
    }, [])

    function handleChangeCat(catName){
        setActiveCat(catName)
    }

    function showSideBar(){
        document.getElementById("blurBg").classList.remove('hideSideBar')
    }
    return (
        <div className="homeBg">
            <div className="miniMenu">
                <RiMenu2Fill onClick={()=>showSideBar()}/>
            </div>
            
            <div className="homeContainer">
                <HomeContent activeCat={activeCat} handleChangeCat={handleChangeCat}/>
            </div>
            
            { activeCat !== "" ? <div className="floatingButtonContainer" >
                <span className="tooltiptext">Add {activeCat} Task Here</span>
                <Link to={"/addTask?cat="+activeCat}>
                 <div className="addTaskFloatingButton">
                    <MdAdd/>
                </div>
                </Link>
                
            </div> : <div></div>}

            
            {/* <pre>{JSON.stringify(currentUser, null, 2)}</pre> */}
            
            <SideNav exp={!data ? 0 : data.exp}/>

        </div>
    )
}

export default Home
