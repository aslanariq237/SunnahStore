import React from 'react';
import gray from "./../../../../images/gray.jpg";
import sirwal from "./../../../../images/sirwal.jpg";
import peci from "./../../../../images/pecitaliban.jpg";

function carousel() {
    return (
        <div className="">
            <h3 className='text-xl font-semibold ml-10 text-white'>Men</h3>
            <div className="flex bg-gray-200 justify-between ">
                <div className="right-text md:text-4xl mt-48 ml-52">
                    <p className='font-semibold'>Sirwal Wedan</p>
                    <p className='font-thin'>February 12,9  </p>
                    <button className='w-full bg-slate-500 mt-2 py-1'>BUY NOW</button>
                </div>
                <img className='py-4 mr-40' width={350} src={sirwal} alt="" />
            </div>
        </div>
    )
}

export default carousel;