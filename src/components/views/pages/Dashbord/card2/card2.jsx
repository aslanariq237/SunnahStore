import React from 'react'
import sirwal from "./../../../../images/sirwal.jpg";
import peci from "./../../../../images/pecitaliban.jpg";

function card2() {
  return (
    <div className="mt-10 bg-gray-200">
    <div className="flex justify-between mt-5 px-20">
        <div className="card mt-3 rounded-lg mb-2 w-52">
            <div className="text mt-2 mb-5 px-2 text-center">
                <p className='text-md font-medium'>Pengembalian 15 hari</p>
            </div>
        </div>
        <div className="card mt-3 rounded-lg mb-2 w-52">
            <div className="text mt-2 mb-5 px-2 text-center">
                <p className='text-md font-medium'>Pengiriman cepat</p>
            </div>
        </div>
        <div className="card mt-3 rounded-lg mb-2 w-52">
            <div className="text mt-2 mb-5 px-2 text-center">
                <p className='text-md font-medium'>Versatile style</p>
            </div>
        </div>
        <div className="card mt-3 mb-2 rounded-lg w-52">
            <div className="text mt-2  px-2 text-center">
                <p className='text-md font-medium'>timeless originality</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default card2