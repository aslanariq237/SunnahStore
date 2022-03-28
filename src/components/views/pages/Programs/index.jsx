import React from 'react'
import Program from './programs'
import Navbar from '../../../Template/navLogin'
import Footer from '../../../Template/footer'

const Index = () => {
  return (
    <div className="justify-center">
        <div className="font-inter w-full">
            <Navbar/>
        </div>
        <div className="bg-gray-200 font-inter">
          <Program/>
        </div>
        <div className="font-inter">
          <Footer/>
        </div>
    </div>
  )
}

export default Index