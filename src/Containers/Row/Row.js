import React,{useState,useEffect} from 'react'
import './Row.css'
import axios from '../../Axios/axios'
import requests from '../../Axios/requests'
import {useDispatch} from 'react-redux'
import {setVideo,resetVideo} from '../../store/slices/videoSlice'
const Row = ({fetchUrl,title,isLarge}) => {
    const [movies,setMovies]=useState()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        async function fetchMovies(){
            const res= await axios.get(fetchUrl)
            const moviesList=res.data.results
            // console.log(moviesList)
            setMovies(moviesList)
        } 
        fetchMovies()

    },[fetchUrl])

    const onClickHandler=(id)=>{
        axios.get(requests.fetchVideo(id))
        .then((res)=>{
            // console.log(res)
            let results=res.data.results
            if(results && results.length>0)
            {
                // console.log(res)
                dispatch(setVideo(results[0].key))
            
            }
            else
            {
                dispatch(resetVideo())

            }
        })
        .catch(error=>{
            dispatch(resetVideo())
        })
      
    // console.log(id)
    }
    
    let baseUrl="https://image.tmdb.org/t/p/original"
    return (
        <div className="row">
            
              
            
                    

            <h2>{title}</h2>
            <div className="row_posters">
               {
                  
                   movies?.map((movie)=>(

                    ((isLarge && movie.poster_path) ||  ( !isLarge && movie.backdrop_path))?(
                    <img
                       className={`row_poster ${isLarge && "row_posterLarge"}`}
                       key={movie.id}
                       src={`${baseUrl}${isLarge?movie.poster_path:movie.backdrop_path}`}
                       alt={movie.name}
                       onClick={()=>{onClickHandler(movie.id)}}
                       
                       />
                        ) :null
                     
                   ))
               }
            </div>
        </div>
    )
}

export default Row
