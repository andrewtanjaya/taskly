import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../Hooks/useMounted'
import './Login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const { login, signInWithGoogle } = useAuth()
    const history = useHistory()

    const mounted  = useMounted()
    
    return (
        
        <div>
            <h1>Login</h1>
            <button onClick={()=>{
                signInWithGoogle()
                .then(user=>console.log(user))
                .catch(error => console.log(error.message))}
                }>Sign In with google</button>
            <form onSubmit={async e=>{
                e.preventDefault()
                console.log("a")
                if(!email || !password){
                    alert("all field must be filled")
                    
                }else{
                    setIsSubmitting(true)
                    login(email, password).then((response) => {
                        console.log(response)
                        history.push('/')
                    }).catch((error)=>{console.log(error.message)})
                        .finally(()=> mounted.current && setIsSubmitting(false))
                }
            }}>

                <input placeholder="email" type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder="password" type="password" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                {isSubmitting ? <button type="submit" disabled>Loading</button> :<button type="submit">Sign In</button> }

                <a href="/register">Sign up</a>
            </form>

        </div>
    )
}

export default Login
