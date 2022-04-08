import React from 'react'
import { Link } from 'react-router-dom'

function sidebar() {
    return (
        <div className="">
            <div className="px-2 py-2">
                <p className='flex justify-center'>Website</p>
            </div>
            <div className="">
                <button className='w-full bg-white hover:bg-slate-200 py-2'>User</button>
                <Link to={'/barang'}><button className='w-full bg-white hover:bg-slate-200 py-2'>Barang</button></Link>
                <button className='w-full bg-white hover:bg-slate-200 py-2'>Category</button>
            </div>
        </div>
    )
}

export default sidebar