import React,{useState,useEffect} from 'react'
import './Navbar.css'
import {useHistory} from 'react-router-dom'
const Navbar = () => {

    const[navBlack,setNavBlack]=useState(true)
    const history=useHistory()
const scrollHandler=()=>{

    if(window.scrollY>100)
    {
        setNavBlack(false)
    }
    else
    {
        setNavBlack(true)
    }
}
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
        return ()=>window.removeEventListener('scroll',scrollHandler)
    },[])
    return (
        <div className={`navbar ${navBlack && "navbar_black"}`}>
            <div className="navbar_content">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className="navbar_logo" alt="Netflix_logo"  onClick={()=>history.replace('/')}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="navbar_avatar" alt="Netflix_avatar" onClick={()=>history.push('/profile')}/>
            </div>
        </div>
    )
}

export default Navbar
