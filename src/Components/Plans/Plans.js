import React,{useState,useEffect} from 'react'
import './Plans.css'
import {db} from '../../firebase'
import {setPlan} from '../../store/slices/userSlice'
import {useSelector,useDispatch} from 'react-redux' 

function Plans() {
     const user = useSelector(state => state.user.user)
     const userPlan=useSelector(state=>state.user.plan)
     const dispatch = useDispatch()
    const [plans,setPlans]=useState()
    
    useEffect(()=>{
            db.collection('plans').onSnapshot(snapshot=>{
              setPlans(snapshot.docs.map(doc=>{
                 return{
                     id:doc.id,
                     data:doc.data()
                 }
              }))
            })

            
    },[])
    const onSubscribeHandler=(id,name)=>{
        // console.log("subs",id,user)
        var today=new Date()
        today.setDate(today.getDate() + 30);
        var renewalDate=today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear()
        db.collection('customers').doc(user.email).set({
           email:user.email,
            plan:{
                id:id,
                name:name,
                renewalDate:renewalDate
            }
        })
        .then(()=>{
            dispatch(setPlan({
                id:id,
                name:name,
                renewalDate:renewalDate

               
            }))
        })
        .catch((e)=>{
            // console.log(e.message)
        })
    }
   
    return (
        <div className="Plans">
            <h3>Plans</h3>
            {
               plans?( plans.map(plan=>{
                return(<div className="plan" key={plan.id}>
                    <div className="">
                       <h5>
                         {  plan.data.name}
                       </h5>
                       <p>{plan.data.quality}</p>
                        </div>
                        <button className={`${userPlan&&userPlan.id===plan.id?"currentPlan":"subscribe"}`} onClick={ ()=>onSubscribeHandler(plan.id,plan.data.name)}>
                        {`${userPlan&&userPlan.id===plan.id?"Current Plan":"Subscribe"}`}</button>
                </div>
                )
            })):null
            }
                   
                </div>
    )
}

export default Plans
