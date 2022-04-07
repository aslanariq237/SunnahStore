import React from 'react'
import Womans from './Women'
import Navbar from '../../../Template/navLogin'
import Footer from '../../../Template/footer'


function index(list) {

  return (
    <div className="justify-center">
        <div className="font-inter w-full">
            <Navbar/>
        </div>
        <div className="bg-gray-200 font-inter">
          <Womans list={list}/>
        </div>
        <div className="font-inter">
          <Footer/>
        </div>
    </div>
  )
}

export default index