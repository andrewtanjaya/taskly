
import AccordionTask from '../AccordionTask/AccordionTask'
import CategoryCard from '../CategoryCard/CategoryCard'
import { useAuth } from '../Context/AuthContext'
import Search from '../Search/Search'
import {MdAdd} from 'react-icons/md'
import './HomeContent.css'
import TaskCard from '../TaskCard/TaskCard'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import database from '../utils/database'

function HomeContent(props) {

    const {currentUser } = useAuth()
    const [data, setData] = useState()
    const [tab, setTab] = useState("All")
    const [todayData, setTodayData] = useState()
    const [upcomingData, setUpcomingData] = useState()
    const [filteredTask, setFilteredTask] = useState([])

    useEffect(() => {
        database.getAllData(currentUser.uid).then((data)=>{
            setData(data)
            console.log(data)
            
            if( data && data.category.length > 0){
                var today = {
                    category: [   
                    ]
                }
                var upcoming = {
                    category: [   
                    ]
                }
                for(var i=0;i<data.category.length;i++){
                    var todayTask = []
                    var upcomingTask = []
                    for (var j = 0; j < data.category[i].task.length;j++){
                        if(data.category[i].task[j].from.toDate().setHours(0,0,0,0) <= (new Date()).setHours(0,0,0,0) || data.category[i].task[j].to.toDate().setHours(0,0,0,0) >= (new Date()).setHours(0,0,0,0)){
                            todayTask.push({
                                icon: data.category[i].task[j].icon,
                                title: data.category[i].task[j].title,
                                from: data.category[i].task[j].from,
                                to: data.category[i].task[j].to,
                            })
                        }
                        if(data.category[i].task[j].from.toDate().setHours(0,0,0,0) > (new Date()).setHours(0,0,0,0)){
                            upcomingTask.push({
                                icon: data.category[i].task[j].icon,
                                title: data.category[i].task[j].title,
                                from: data.category[i].task[j].from,
                                to: data.category[i].task[j].to,
                            })
                        }
                    }
                    if(todayTask.length !== 0){
                        today.category.push({
                            icon: data.category[i].icon,
                            name : data.category[i].name,
                            task: todayTask
                        })
                    }
                    if(upcomingTask.length !== 0){
                        upcoming.category.push({
                            icon: data.category[i].icon,
                            name : data.category[i].name,
                            task: upcomingTask
                        })
                    }
                }

                setUpcomingData(upcoming)
                setTodayData(today)
                console.log("today data :" , today)
            }
        })
        if(data){
            setFilteredTask(data.category.filter(function (el) {
                return  el.name === props.activeCat
              }))
              console.log("ini filtered" ,filteredTask)
        }
    }, [props.activeCat])

    function deleteCat(e,catName){
        e.stopPropagation();
        var newCategory = data.category.filter(function (el) {
            return  el.name !== catName
          })
        console.log(newCategory)
        var result = window.confirm(`Do you sure want to delete ${catName}?`)
        if(result){
            var newData = data
            newData.category = newCategory
            database.createCategory(newData, currentUser.uid).then(()=>{
                alert("Succesfully delete category")
                database.getAllData(currentUser.uid).then((data)=>{
                    setData(data)
                })
            })
        }
    }

    function deleteTask(e,catName, taskName, addExp){
        e.stopPropagation();
        var newTask;
        var index; 
        console.log(catName, data)
        for (var i= 0;  i<data.category.length;i++){
            if(data.category[i].name === catName){
                index = i
                console.log(index)
                newTask = data.category[i].task.filter(function(el){
                    return el.title !== taskName
                })
                break
            }
            
        }
        console.log(newTask)
        var result = window.confirm(`Do you sure want to delete ${taskName}?`)
        if(result){
            var newData = data
            if(!newTask || newTask.length === 0) newData.category[index].task = []
            else newData.category[index].task = newTask
            
            if(addExp) newData.exp += 10

            database.createCategory(newData, currentUser.uid).then(()=>{
                alert("Succesfully delete task")
                database.getAllData(currentUser.uid).then((data)=>{
                    setData(data)
                    window.location.reload()
                })
            })
        }
    }

    function changeTab(tabName){
        setTab(tabName)
        if(tabName === 'Upcoming' && upcomingData && upcomingData.category ){
            setFilteredTask(upcomingData.category.filter(function (el) {
                return  el.name === props.activeCat
              }))

        }else if(tabName === "All" && data && data.category){
            setFilteredTask(data.category.filter(function (el) {
                return  el.name === props.activeCat
              }))

        }
    }    

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

            {
                todayData && todayData.category.length > 0 ? todayData.category.map((item,i)=>
                    <AccordionTask key={i} identity={i} title={item.name} tasks={item.task} icon={item.icon}/>
                ): <p className="textNon">You are free today 🎉</p>
            }
           
            {/* <AccordionTask title="Birthday Party!" icon="🎉"/> */}

            <div className="divider1">
                <p>Category</p>
                <hr></hr>
            </div>

            <div className="categoryList">
            {
                data ? data.category.map((item,i)=>
                <CategoryCard key={i} title={item.name} icon={item.icon} taskCount={item.task.length} changeCat={props.handleChangeCat} activeCat={props.activeCat} deleteCat={deleteCat} />
                ): <div></div>
            }
                
                {/* <CategoryCard title="Workout Routine" icon="💪" isActive="false"/>
                <CategoryCard title="Birthday Party!" icon="🎉" isActive="false" /> */}
                <Link to="/addCategory">
                    <div className="addCategoryContainer">
                        <MdAdd/>
                    </div>
                </Link>
            </div>

            <div className="divider2">
                <p>{props.activeCat}</p>
                <hr></hr>
                <div className="statusAction">
                    <div className={tab=== 'All' ? "ongoing activeStatus" : "ongoing"} onClick={()=>changeTab('All')}>
                        <p>All</p>
                    </div>
                    <div className={tab=== 'Upcoming' ? "upcoming activeStatus" : "upcoming"} onClick={()=>changeTab('Upcoming')}>
                        <p>Upcoming</p>
                    </div>
                </div>
            </div>

            <div className="taskCardList">
                {
                    filteredTask && filteredTask[0]?.task  ? filteredTask[0].task.map((item,i)=>  <TaskCard key={i} activeCat={props.activeCat} deleteTask={deleteTask} icon={item.icon} title={item.title} date={item.from.toDate().toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })+ ""} time={(item.from.toDate().getHours() < 10 ? '0' +item.from.toDate().getHours() : item.from.toDate().getHours())+ ":" +(item.from.toDate().getMinutes() < 10 ? '0' +item.from.toDate().getMinutes() : item.from.toDate().getMinutes()) + " - " + (item.to.toDate().getHours() < 10 ? '0' +item.to.toDate().getHours() : item.to.toDate().getHours())+ ":" +(item.to.toDate().getMinutes() < 10 ? '0' +item.to.toDate().getMinutes() : item.to.toDate().getMinutes())} />)
                    : <div className="textNon">No task please add it first 🙄</div> 
                }
            </div>
        </div>
    )
}

export default HomeContent
