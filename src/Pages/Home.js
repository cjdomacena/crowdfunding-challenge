import React from 'react'
import Navbar from './../Components/Navbar'
import './../App.css'
import  FundContainer from '../Components/FundTracker/FundContainer/'
const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="hero-background"></div>
            <FundContainer></FundContainer>
        </>
    )
}

export default Home
