import React from 'react'
import Navbar from './../../../../Template/navLogin'
import Footer from './../../../../Template/footer'
import Detail from './detail'
import { useParams } from 'react-router-dom'

function Index(task) {
  let {id} = useParams();

  return (
    <div className="justify-center">
      <div className="font-inter w-full">
        <Navbar />
      </div>
      <div className="bg-white font-inter">
        <Detail task={task} id={id}/>
      </div>
      <div className="font-inter">
        <Footer />
      </div>
    </div>
  )
}

export default Index