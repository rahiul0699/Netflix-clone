import React from 'react'
import './Video.css'
import {useSelector,useDispatch} from 'react-redux'
import {resetVideo} from '../../store/slices/videoSlice'

const Video = () => {
  
   const dispatch = useDispatch()
   const videoKey = useSelector(state => state.video.video)
    const showHandler=()=>{
 
        dispatch(resetVideo())
    }
    let video=null
    if(videoKey)
    {
       video=( <div className="videoContainer" onClick={showHandler}>
        <iframe title="Youtube_video " className ="videoFrame"width="600" height="345" src={`https://www.youtube.com/embed/${videoKey}`}/>

        </div> )
       
    }
   
    return (
        <div className="video">
            
            {video}
          
        </div>
    )
}

export default Video
