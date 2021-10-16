import { getAuth, updateProfile } from '@firebase/auth'
import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../Hooks/useMounted'
import './Register.css'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const { register } = useAuth()
    const mounted = useMounted()
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={async e=>{
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
                <input type="text" placeholder="name" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)} />
                <input placeholder="email" type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder="password" type="password" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                {isSubmitting ? <button type="submit" disabled>Loading</button> :<button type="submit">Sign Up</button> }

                <a href="/login">Sign in</a>
            </form>

        </div>
    )
}

export default Register
