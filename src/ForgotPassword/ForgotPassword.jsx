import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import useMounted from '../Hooks/useMounted'
import './ForgotPassword.css'

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const { forgotpassword } = useAuth()

    const mounted  = useMounted()
    return (
        <div className="forgotContainer">
        <div className="forgotMiniContainer">
            <h1>Forgot Password</h1>
            <p className="afterSignInText">Enter your email and we'll send you a link to get back into your account.</p>
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
                <label>Email</label>
                <input placeholder="email" type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                {isSubmitting ? <button type="submit" disabled>Loading</button> :<button type="submit">Submit</button> }
                <div className="registerLinkText">
                    <p>Back to </p>
                    <a href="/login">Sign in</a>
                </div>
            </form>
        </div>

    </div>
    )
}

export default ForgotPassword
