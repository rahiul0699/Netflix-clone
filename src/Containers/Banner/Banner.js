import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from '../../Axios/axios'
import requests from '../../Axios/requests'
const Banner = () => {

const [movie,setMovie]=useState(null)
    useEffect(()=>{
        async function fetchBanner(){
            const res=await axios.get(requests.fetchNetflixOrginals)
            const results =res.data.results
            // console.log(results)
            setMovie(results[Math.floor(Math.random() *(results.length-0) )])

        }

        fetchBanner()
    },[])
    const truncateHandler=(str,n)=>{
        return str&& str.length>n ? str.substring(0,n)+"...":str
    }
    let bgImage=movie?`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`:`url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`
    return (
        <div className="banner" style={{
            backgroundImage:bgImage
        }}>
            <div className="banner_content">
                <h2 className="banner_title">{movie?.original_name || movie?.name || movie?.title}</h2>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                <p className="banner_description">{truncateHandler(movie?.overview,150)}</p>
            </div>
            <div className="banner_fade"> </div>
        </div>
    )
}

export default Banner
