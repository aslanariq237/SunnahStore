import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <React.Fragment>
            <div className="flex justify-between py-3">
                <Link to={'/home'}><h3 className="font-medium text-xl ml-10 mt-1 text-gray-500 hover:text-gray-700">LOGO</h3></Link>
                <ul className="flex space-x-5 font-medium text-lg mt-1">
                    <Link to={'/Collection'}><li><a className="text-slate-500 hover:text-slate-700" href="">Shop</a> </li></Link>
                    <li><a className="text-slate-500 hover:text-slate-700" href="">Top Seller</a> </li>
                    <li><a className="text-slate-500 hover:text-slate-700" href="">Contact</a> </li>
                </ul>
                <div className="tombol space-x-5 mr-8">
                <button className="bg-gray-400 px-3 py-1 font-medium rounded-sm hover:bg-gray-500 hover:text-white text-lg">Login</button>
                <button className="bg-gray-400 px-3 py-1 font-medium rounded-sm hover:bg-gray-500 hover:text-white text-lg">Register</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav;