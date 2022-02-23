import React from 'react'
import Carousel from "./carousel"
import Card from "./card"
import Card2 from "./card2"
import Navbar from "./../../../Template/navLogin"
import Footer from './../../../Template/footer'

function Dashbord() {
    return (
        <React.Fragment>

            <div className="font inter w-full">
                <header className='bg-gray-200'>
                    <Navbar/>
                </header>
            </div>
            <div className="bg-slate-500 font-inter">
                    <Carousel />
                <div className="">
                    <Card/>
                </div>
                <div className="">
                    <Card2/>
                </div>
                <div className="">
                    <Footer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashbord;