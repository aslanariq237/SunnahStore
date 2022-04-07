import React from 'react'
import Register from './register'
import Navbar from './../../Template/navLogin'
import Footer from './../../Template/footer'

function index() {
  return (
    <div className="justify-center">
    <div className="font-inter w-full">
        <Navbar/>
    </div>
    <div className="container justify-c">
      <Register/>
    </div>
    <div className="font-inter">
      <Footer/>
    </div>
</div>
  )
}

export default index