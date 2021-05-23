import React,{useEffect} from 'react'
import './Profile.css'
import Plans from '../Plans/Plans'
import Navbar from '../../Containers/Navbar/Navbar'
import {useSelector} from 'react-redux'
import {auth,db} from '../../firebase'
const Profile = () => {
     const user = useSelector(state => state.user.user)
   const plan = useSelector(state => state.user.plan)
  //  console.log("[Profile.js] plan-->",plan)
     const signoutHandler=()=>{
       auth.signOut()
      
     }
     useEffect(()=>{

      db.collection('customers')

     },[])
    
     
     
       
       
     
    return (
        <>
          <Navbar/>
        <div className="profile">
          <div className="profile_body">
          <h1>Edit Profile </h1>
       
              <div className="profileBody_content">
              
              <div className="profileContent_left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="profileContent_avatar" alt="Netflix_avatar"/>

              </div>
              <div className="profileContent_right">
                <p className="profile_email">{user.email}</p>
                {plan?<h3 className="profile_plan">{` Current Plan: ${plan.name}`}</h3>:<h3 className="profile_plan">Please select a plan to continue</h3>}
       {plan?<p className="profile_renewalDate">{`Renewal date: ${plan.renewalDate}`} </p>:null}
        <Plans/>

                <div className="signoutButton" onClick={signoutHandler}>Sign out</div>
              </div>

              </div>
             
         </div>
        </div>
        </>
    )
}

export default Profile 
