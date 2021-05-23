import './App.css';
import React ,{useEffect} from 'react'
import Homescreen from './Components/Homescreen/Homescreen'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import {Route,Switch,Redirect} from 'react-router-dom'
import {auth,db} from './firebase'
import {useSelector,useDispatch} from 'react-redux'
import {login,logout,setPlan} from './store/slices/userSlice'
function App() {
  let isAuth=useSelector(state=>state.user.user)
  let currentPlan=useSelector(state=>state.user.plan)
 const dispatch = useDispatch()
  useEffect(()=>{
//  console.log("Mounting")
  const unsubscribe=auth.onAuthStateChanged(user=>{
   
    if(user)
    {
      dispatch(login({
        email:user.email,
        id:user.uid
      }))
      db.collection('customers').doc(user.email).onSnapshot(snapshot=>{
      dispatch(setPlan(snapshot.data().plan)) 
      })
    }
    else
  {
    dispatch(logout())
  }
  })
  return unsubscribe
},[dispatch])

let app=<Login/>

if(isAuth){

  app=(
   
    <Switch>
    <Route path="/" exact>
      {currentPlan?<Homescreen/>:<Redirect to="/profile"/>}
    
    </Route>
    <Route path="/profile" exact>
      <Profile/>
    </Route>
  </Switch>
  )
}
  return (
    <div className="App">
       
    {
      app
    }
     
    </div>
  );
}

export default App;
