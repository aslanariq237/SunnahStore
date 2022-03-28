import React from 'react'
import Sirwal from './../../../../images/sirwal.jpg'
import { FaStar } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fa'


function detail() {
    return (
        <div className="container">
            <div className="flex justify-center">
                <div className="grid grid-cols-6 gap-4 mt-4">
                    <div className="col-span-3">
                        <img src={Sirwal} alt="" className="" />
                    </div>
                    <div className="col-span-3">
                        <p className='font-normal text-2xl'>Sirwal Edan</p>
                        <div className="flex mt-2">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="flex justify-between">
                            <p className='text-gray-500 font-normal text-2xl font-sans mt-4'>Rp. 50.000</p>
                            <p className='text-blue-500 mt-5'>in Stock</p>
                        </div>
                        <div className="outline-none border-2 border-gray-600 bg-gray-600 mt-2"></div>
                        <p className='text-thin mt-10'>Tax Included. Shipping calculated at checkout</p>
                        <p className='mt-5'>Find My Size</p>
                        <div className="form-group mt-4">
                            <label>Color</label>
                            <select name="" id="" className="form-control w-full px-2 py-2">
                                <option value="1">Green</option>
                                <option value="2">Blue</option>
                                <option value="3">Red</option>
                            </select>
                        </div>
                        <div className="form-group mt-4">
                            <label>Size</label>
                            <select name="" id="" className="form-control w-full px-2 py-2">
                                <option value="1">L</option>
                                <option value="2">XL</option>
                                <option value="3">M</option>
                            </select>
                        </div>
                        <div className="flex space-x-3">
                            <button className='bg-blue-200 mt-3 w-full py-2 hover:bg-blue-300'><p className='text-white'>Add to Card</p></button>
                            <button className='bg-blue-200 mt-3 px-4 hover:bg-blue-300'><p className='text-white'>Love</p></button>
                        </div>
                        <div className="flex justify-center space-x-2">
                            <button className='bg-blue-300 mt-3 w-24 hover:bg-blue-200 py-2'><p className='text-white'>Description</p></button>
                            <button className='bg-blue-300 mt-3 w-24 hover:bg-blue-200'><p className='text-white'>Shipping</p></button>
                            <button className='bg-blue-300 mt-3 w-24 hover:bg-blue-200'><p className='text-white'>Return</p></button>
                        </div>
                        <div className="description mt-5 mb-2">
                            <p className='font-medium text-gray-500 text-2xl'>MOO Extreme Drop Crotch Linen Trousers Sirwal</p>
                            <td className=''>
                                <tr>High quality, casual wide leg Linen Trousers</tr>
                                <tr>Keeps you cool and comfortable!</tr>
                                <tr>With two front pockets to safely store small items</tr>
                            </td>
                            <p className='text-lg font-medium text-gray-500 mt-4'>Details</p>
                            <td>
                                <tr>Material: Linen, cotton</tr>
                                <tr>Applicable Season: Four Seasons</tr>
                                <tr>Pant Style: Harem Pants</tr>
                                <tr>Waist Type: Mid, Elastic Waist</tr>
                                <tr>Front Style: Flat</tr>
                            </td>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default detail