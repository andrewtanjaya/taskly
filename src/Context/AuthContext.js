import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../utils/init-firebase'
import {createUserWithEmailAndPassword ,
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithRedirect,
    sendPasswordResetEmail} from 'firebase/auth'

const AuthContext = createContext({
    toggleSide: false,
    setToggleSide : ()=>{},
    currentUser : null,
    register: ()=> Promise,
    login: ()=>Promise,
    logout: ()=>Promise,
    signInWithGoogle: ()=>Promise,
    forgotpassword: ()=>Promise
})

export const useAuth = ()=> useContext(AuthContext)

export default function AuthContextProvider({children}){
    const [currentUser,setCurrentUser] = useState(null)
    const [toggleSide,setToggleSide] = useState(false)

    useEffect(() => {
        const unsubscribe  = onAuthStateChanged(auth, user=>{
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    function register(email, password, name){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInWithGoogle(){
        const provider= new GoogleAuthProvider()
        return signInWithRedirect(auth, provider)
    }

    function forgotpassword(email){
        return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/login'})
    }

    const value = {
        toggleSide,
        setToggleSide,
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle,
        forgotpassword
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}