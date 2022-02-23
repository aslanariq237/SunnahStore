import React from 'react'
import sirwal from "./../../../../images/sirwal.jpg";
import peci from "./../../../../images/pecitaliban.jpg";
import jubah from "./../../../../images/GambarSirwal.jpg";
import cadar from "./../../../../images/cadar.jpg";
import jubah2 from "./../../../../images/jubah.jpg";

function card() {
  return (
    <div className="mt-10">
        <p className='text-white text-3xl font-medium ml-40'>What's Hot</p>
    <div className="flex justify-center space-x-5 mt-5">
        <div className="card bg-slate-100 rounded-lg mb-2">
            <img src={peci} width={250} alt="peci" />
            <div className="text mt-2 mb-5 px-2">
                <p className='text-lg font-semibold font-sans'>Peci Taliban versi now</p>
                <p className='text-md font-thin'>Versatile style, timeless originality</p>
            </div>
        </div>
        <div className="card bg-slate-100 rounded-lg mb-2">
            <img src={sirwal} width={250} alt="peci" />
            <div className="text mt-2 mb-5 px-2">
                <p className='text-lg font-semibold font-sans'>Lari cuuy, ada yang cepu</p>
                <p className='text-md font-thin'>Versatile style, timeless originality</p>
            </div>
        </div>
        <div className="card bg-slate-100 rounded-lg mb-2">
            <img src={jubah} width={250} alt="peci" />
            <div className="text mt-2 mb-5 px-2">
                <p className='text-lg font-semibold font-sans'>Tukang Bomb Terorist</p>
                <p className='text-md font-thin'>Versatile style, timeless originality</p>
            </div>
        </div>
        <div className="card bg-slate-100 rounded-lg mb-2">
            <img src={jubah2} width={250} alt="peci" />
            <div className="text mt-2 mb-5 px-2">
                <p className='text-lg font-semibold font-sans'>Miss hijab hyper</p>
                <p className='text-md font-thin'>Versatile style, timeless originality</p>
            </div>
        </div>
        <div className="card bg-slate-100 rounded-lg mb-2">
            <img src={jubah2} width={250} alt="peci" />
            <div className="text mt-2 mb-5 px-2">
                <p className='text-lg font-semibold font-sans'>Peci Taliban versi now</p>
                <p className='text-md font-thin'>Versatile style, timeless originality</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default card