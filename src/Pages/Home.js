import React from 'react'
import Navbar from './../Components/Navbar'
import './../App.css'
import Bookmark from '../Components/Bookmark'
const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="hero-background"></div>
            <Bookmark/>
        </>
    )
}

export default Home
