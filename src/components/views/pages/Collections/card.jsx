import React from 'react'
import { Link } from 'react-router-dom';
import cadar from './../../../images/cadar3.jpg'
import sirwal from './../../../images/sirwal.jpg'
import jubah from './../../../images/jubah.jpg'
import gamis from './../../../images/GambarSirwal.jpg'

function card() {
    return (
        <div className="Container flex justify-center my-10 space-x-6">
            <div className="card">
                <img className='' width={320} src={cadar} />
                <Link to={'/womens'}><button className='px-10 py-2 my-1 bg-slate-500 text-white text-md  ml-20'>Womens</button></Link>
            </div>
            <div className="card">
                <img className='' width={320} src={sirwal} />
                <Link to={'/sirwal'}><button className='px-10 py-2 my-1 bg-slate-500 text-white text-md  ml-20'>sirwal</button></Link>
            </div>
            <div className="card">
                <img className='' width={320} src={jubah} />
                <button className='px-10 py-2 my-1 bg-slate-500 text-white text-md  ml-20'>jubah</button>
            </div>
            <div className="card">
                <img className='' width={320} src={gamis} />
                <button className='px-10 py-2 my-1 bg-slate-500 text-white text-md ml-20'>gamis</button>
            </div>
        </div>
    )
}

export default card