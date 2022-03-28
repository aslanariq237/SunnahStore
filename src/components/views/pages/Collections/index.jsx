import React from 'react'
import Collection from './collection'
import Card from './card'
import Navbar from './../../../Template/navLogin'
import Footer from './../../../Template/footer'
import axios from 'axios';

function index() {
  const getData = async() =>{
    axios.get('')
  }
  return (
    <div className="bg-gray-200 justify-center">
      <div className="font-inter w-full">
        <Navbar/>
      </div>
        <div className="font-inter bg-slate-500">
            <Collection/>
        </div>
        <div className="font-inter">
            <Card/>
        </div>
        <div className="font-inter bg-black text-slate-300 w-full">
          <Footer/>
        </div>
    </div>
    
  )
}

export default index