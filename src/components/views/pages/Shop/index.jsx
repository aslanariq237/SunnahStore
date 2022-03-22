import React from 'react'
import Navbar from '../../../Template/navLogin'
import Footer from '../../../Template/footer'
import Shop from './shop'

const index = () => {
  
  return (
    <div className="justify-center">
    <div className="font-inter w-full">
        <Navbar/>
    </div>
    <div className="bg-gray-200 font-inter">
      <Shop/>
    </div>
    <div className="font-inter">
      <Footer/>
    </div>
</div>
  )
}

export default index