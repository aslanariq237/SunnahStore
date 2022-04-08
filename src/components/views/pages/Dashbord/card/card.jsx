import React from 'react'
import sirwal from "./../../../../images/sirwal.jpg";
import peci from "./../../../../images/pecitaliban.jpg";
import jubah from "./../../../../images/GambarSirwal.jpg";
import cadar from "./../../../../images/cadar2.jpg";
import jubah2 from "./../../../../images/jubah.jpg";
import { Link } from 'react-router-dom'

function card() {
    return (
        <div className="mt-10">
            <p className='text-white text-3xl font-medium ml-40'>What's Hot</p>
            <div className="flex justify-center space-x-5 mt-5">
                <Link to={'/womans'}>
                    <button>
                        <div className="card bg-slate-100 rounded-lg mb-2 py-2">
                            <img src={cadar} width={250} alt="peci" className='-mt-2' />
                            <div className="text mt-2 mb-5 px-2">
                                <p className='text-lg font-semibold font-sans'>Women's</p>
                                <p className='text-md font-thin'>Versatile style, timeless originality</p>
                            </div>
                        </div>
                    </button>
                </Link>
                <button>
                    <div className="card bg-slate-100 rounded-lg mb-2 py-2">
                        <img src={jubah} width={250} alt="peci" className='-mt-2' />
                        <div className="text mt-2 mb-5 px-2">
                            <p className='text-lg font-semibold font-sans'>Gamis</p>
                            <p className='text-md font-thin'>Versatile style, timeless originality</p>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="card bg-slate-100 rounded-lg mb-2 py-2">
                        <img src={jubah2} width={250} alt="peci" className='-mt-2' />
                        <div className="text mt-2 mb-5 px-2">
                            <p className='text-lg font-semibold font-sans'>Jubah</p>
                            <p className='text-md font-thin'>Versatile style, timeless originality</p>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="card bg-slate-100 rounded-lg mb-2 py-2">
                        <img src={sirwal} width={250} alt="peci" className='-mt-2' />
                        <div className="text mt-2 mb-5 px-2">
                            <p className='text-lg font-semibold font-sans'>Sirwal</p>
                            <p className='text-md font-thin'>Versatile style, timeless originality</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default card