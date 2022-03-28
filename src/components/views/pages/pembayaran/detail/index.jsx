import React from 'react'
import Navbar from './../../../../Template/navLogin'
import Footer from './../../../../Template/footer'
import Detail from './detail'

const index = () => {

  return (
    <div className="justify-center">
      <div className="font-inter w-full">
        <Navbar />
      </div>
      <div className="bg-white font-inter">
        <Detail />
      </div>
      <div className="font-inter">
        <Footer />
      </div>
    </div>
  )
}

export default index