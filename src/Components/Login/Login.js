import React,{useState} from 'react'
import './Login.css'
import Signin from '../Signin/Signin'
const Login = () => {
    const [signin,setSignin]=useState(false)
    
    const onSigninHandler=()=>{
       setSignin(true)
    }

    let bodyContent=(
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
            <p className="tagline">Watch anywhere. Cancel at any time.</p>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <form className="loginForm">
                <input className="formInput" placeholder="Email Address"/>
                <button type="submit" className="formButton" onClick={(e)=>{e.preventDefault();
                onSigninHandler()}}>GET STARTED</button>
            </form>
        </>
        
    )
    if(signin)
    {
        bodyContent=<Signin/>
    }
    return (
        <div className="login">
            <div className="login_nav">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className="loginNav_logo" alt="Netflix_logo"/>
            <button className="loginNav_button" onClick={onSigninHandler}>Sign in</button>
            </div>
            <div className="login_content">

            </div>
            <div className="login_fade">

            </div>
            <div className="login_body">
             <div className="loginBody_content">
                 
           {bodyContent}
                 </div>  
         
            </div>
        </div>
    )
}

export default Login
