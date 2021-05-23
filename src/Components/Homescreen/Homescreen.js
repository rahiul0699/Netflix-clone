import React from 'react'
import './Homescreen.css'

import Navbar from '../../Containers/Navbar/Navbar'
import Banner from '../../Containers/Banner/Banner'
import Row from '../../Containers/Row/Row'
import requests from '../../Axios/requests'
import Video from '../Video/Video'
const Homescreen = () => {
    return (
        <div className="homescreen">
            <Navbar/>
            <Video />
            <Banner/>
            <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOrginals} isLarge/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLarge/> */}




           

        </div>
    )
}

export default Homescreen 
