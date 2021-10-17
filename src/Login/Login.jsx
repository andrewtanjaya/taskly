import React, { useState} from 'react'
import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../Hooks/useMounted'
import logo from '../Assets/taskly-logo.png'
import google from '../Assets/google-logo.png'
import hand from '../Assets/hand.png'
import './Login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const { login, signInWithGoogle } = useAuth()
    const history = useHistory()
    const location = useLocation()

    const mounted  = useMounted()
    
    return (
        
        <div className="signInContainer">
            <div className="leftContentSignIn">
                <img src={hand} alt="" />
                <div className="titleDesc">
                    <p className="titleSlider"><b>Keep task in one place</b></p>
                    <p className="descSlider">Save time, avoid losing work and
                    information, delegate, and track tasks
                    to stay on schedule and hit deadlines.</p>
                </div>
            </div>
            <div className="rightContentSignIn">
            <div className="logoContainerSignIn">
                <img src={logo} alt="logo" />
                <p><b>task.ly</b></p>
            </div>
            <h1>Sign In</h1>
            <p className="afterSignInText">Start manage your work now!</p>

            <button className="googleSignInButton" onClick={()=>{
                signInWithGoogle()
                .then(user=>console.log(user))
                .catch(error => console.log(error.message))}
                }>
                    <img src={google} alt="" />
                    Sign In with google</button>

            <div className="lineWithText">
            <hr></hr><p className="afterButtonText">or Sign in with Email</p><hr></hr>
            </div>
            <form className="signInForm" onSubmit={async e=>{
                e.preventDefault()
                console.log("a")
                if(!email || !password){
                    alert("all field must be filled")
                    
                }else{
                    setIsSubmitting(true)
                    login(email, password).then((response) => {
                        console.log(response)
                        history.push(location.state?.from ?? '/')
                    }).catch((error)=>{console.log(error.message)})
                        .finally(()=> mounted.current && setIsSubmitting(false))
                }
            }}>
                <label>Email</label>
                <input placeholder="abc@gmail.com" type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password</label>
                <input placeholder="Min.6 characters" type="password" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                

                
                <b><a className="forgotPass" href="/forgotpassword">Forgot password?</a></b>
                {isSubmitting ? <button type="submit" disabled><b>Loading...</b></button> :<button type="submit"><b>Sign In</b></button> }
                <div className="registerLinkText">
                    <p>Not registered yet? </p>
                    <a href="/register">Create an account</a>
                </div>

                <p className="copyRight">©2021 Andrew Wiseson Tanjaya all right reserved</p>
            </form>
            </div>

        </div>
    )
}

export default Login
