import { getAuth, updateProfile } from '@firebase/auth'
import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../Hooks/useMounted'
import clock from '../Assets/clock.png'
import google from '../Assets/google-logo.png'
import logo from '../Assets/taskly-logo.png'
import './Register.css'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const { register, signInWithGoogle } = useAuth()
    const mounted = useMounted()
    return (
            <div className="signInContainer">
            <div className="leftContentSignUp">
                <img src={clock} alt="" />
                <div className="titleDesc">
                    <p className="titleSlider"><b>Prioritize your work</b></p>
                    <p className="descSlider">Tracking tasks allows everyone to 
                    understand which are more important 
                    or require more time</p>
                </div>
            </div>
            <div className="rightContentSignUp">
            <div className="logoContainerSignIn">
                <img src={logo} alt="logo" />
                <p><b>task.ly</b></p>
            </div>
            <h1>Sign Up</h1>
            <p className="afterSignInText">Start manage your work now!</p>

            <button className="googleSignUpButton" onClick={()=>{
                signInWithGoogle()
                .then(user=>console.log(user))
                .catch(error => console.log(error.message))}
                }>
                    <img src={google} alt="" />
                    Sign up with google</button>

            <div className="lineWithTextUp">
            <hr></hr><p className="afterButtonText">or Sign up with Email</p><hr></hr>
            </div>
            <form className="signInForm" onSubmit={async e=>{
                e.preventDefault()
                console.log("a")
                if(!email || !password || !name){
                    alert("all field must be filled")
                    
                }else{
                    setIsSubmitting(true)
                    register(email, password, name).then((response) => {
                        console.log("ini"+response)
                        const auth = getAuth();
                        const user = auth.currentUser;
                        updateProfile(user, {
                            displayName : name
                        }).then(() => {
                            console.log("updated")
                          }).catch((error) => {
                            // An error occurred
                            // ...
                          });

                    }).catch((error)=>{console.log(error.message)})
                        .finally(()=> mounted.current && setIsSubmitting(false))
                }
            }}>
                <label>Name</label>
                <input type="text" placeholder="Name" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)} />
                <label>Email</label>
                <input placeholder="abc@gmail.com" type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password</label>
                <input placeholder="Min.6 characters" type="password" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <div className="check">
                    <input type="checkbox" name="terms" id="" /> 
                    <label>I agree to the Terms & Condition</label>
                </div>
                {isSubmitting ? <button type="submit" disabled><b>Loading...</b></button> :<button type="submit"><b>Sign Up</b></button> }
                <div className="registerLinkText">
                    <p>Already have account? </p>
                    <a href="/login">Sign in</a>
                </div>

                <p className="copyRight">©2021 Andrew Wiseson Tanjaya all right reserved</p>
            </form>
            </div>
            
        </div>

        
    )
}

export default Register
