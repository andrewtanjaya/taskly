import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../Hooks/useMounted'
import './ForgotPassword.css'

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const { forgotpassword } = useAuth()
    const history = useHistory()
    const location = useLocation()

    const mounted  = useMounted()
    return (
        <div>
        <h1>Forgot Password</h1>
        <form onSubmit={async e=>{
            e.preventDefault()
            
            if(!email ){
                alert("all field must be filled")
                
            }else{
                setIsSubmitting(true)
                forgotpassword(email).then((response) =>{
                    console.log(response)
                    alert("email sent")
                }).catch(err=>console.log(err.message))
                .finally(()=>mounted.current && setIsSubmitting(false))
            }
        }}>

            <input placeholder="email" type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
            {isSubmitting ? <button type="submit" disabled>Loading</button> :<button type="submit">Submit</button> }

            <a href="/login">Sign in</a>
        </form>

    </div>
    )
}

export default ForgotPassword
