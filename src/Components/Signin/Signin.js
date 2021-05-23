import React,{ useRef} from 'react'
import './Signin.css'
import {auth,db} from '../../firebase'
const Signin = () => {
    const emailRef=useRef(null)
    const passwordRef=useRef(null)

   const signupHandler=()=>{
  
    auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    .then((userCred)=>{
       let user=userCred.user
     db.collection('customers').doc(user.email).set({
        email:user.email,
        plan:null

    })
    })
    .catch((error)=>{
        alert(error.message)
    })
    
    
   }

   const signinHandler=(event)=>{
       event.preventDefault()
       auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
       .then((user)=>{
            // console.log(user)
       })
       .catch((error)=>{
           alert(error.message)
       })


   }
    return (
        <div className="signin">
            <form className="sign_form">
            <h2>Sign In</h2>
                <input type="email" placeholder="Email" ref={emailRef} />
                <input type="password" placeholder="Password" ref={passwordRef}/>
            <button type="submit" onClick={(e)=>{signinHandler(e)}}>Sign In</button>
            <h5>
                New to Netflix? 
                <span className="signup_link" onClick={signupHandler}> Sign Up now.</span>
            </h5>
            </form>
        </div>
    )
}

export default Signin
