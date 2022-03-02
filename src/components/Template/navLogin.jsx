import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <React.Fragment>
            <div className="flex justify-between py-3">
                <Link to={'/home'}><h3 className="font-medium text-xl ml-10 mt-1">LOGO</h3></Link>
                <ul className="flex space-x-5 font-medium text-lg mt-1">
                    <Link to={'/Collection'}><li><a className="text-slate-500 hover:text-slate-700" href="">Shop</a> </li></Link>
                    <li><a className="text-slate-500 hover:text-slate-700" href="">Top Seller</a> </li>
                    <li><a className="text-slate-500 hover:text-slate-700" href="">Contact</a> </li>
                </ul>
                <div className="bg-blue-400 rounded-full w-9 h-9 mr-10"></div>
            </div>
        </React.Fragment>
    )
}

export default Nav;