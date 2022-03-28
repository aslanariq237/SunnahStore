import React from 'react'
import Navbar from '../../../../Template/navLogin'
import Footer from '../../../../Template/footer'
import Login from './login'

function index() {
  return (
    <div className="justify-center">
    <div className="font-inter w-full">
        <Navbar/>
    </div>
    <div className="container justify-c">
      <Login/>
    </div>
    <div className="font-inter">
      <Footer/>
    </div>
</div>
  )
}

export default index