import React from 'react'
import Navbar from '../../../../Template/navLogin'
import Footer from '../../../../Template/footer'
import Login from './login'

function index() {
  return (
    <div className="justify-center mx-40">
      <div className="font-inter">
        <Navbar />
      </div>
      <div className="container">
        <Login />
      </div>
      <div className="font-inter">
        <Footer />
      </div>
    </div>
  )
}

export default index