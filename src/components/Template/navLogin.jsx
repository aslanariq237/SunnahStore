import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

const Nav = () => {
    return (
        <React.Fragment>
            <div className="flex justify-between py-3">
                <Link to={'/home'}>
                <img src={Logo} alt="Logo" className="w-32 ml-10"/>    
                </Link>
                <ul className="flex space-x-5 font-medium text-lg mt-1 items-center justify-center mr-3 text-white">
                    <Link to={'/shop-all'}><li><a className="text-slate-700 hover:text-slate-500" href="">Shop</a> </li></Link>
                    <li><a className="text-slate-700 hover:text-slate-500" href="">Top Seller</a> </li>
                    <li><a className="text-slate-700 hover:text-slate-500" href="">Contact</a> </li>
                </ul>
                <div className="login">
                    <Link to={'/login'}><button className="w-20 py-1 border-2 bg-slate-400 mt-2 mr-3 rounded-md">login</button></Link>
                    <Link to={'/register'}><button className="w-20 py-1 border-2 bg-slate-400 mt-2 mr-3 rounded-md">sign up</button></Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav;