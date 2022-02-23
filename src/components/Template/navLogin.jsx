import React from "react";

const Nav = () => {
    return (
        <React.Fragment>
            <div className="flex justify-between py-3">
                <h3 className="font-medium text-xl ml-10 mt-1">LOGO</h3>
                <ul className="flex space-x-5 font-semibold text-lg mt-1">
                    <li><a href="">Shop</a> </li>
                    <li><a href="">Top Seller</a> </li>
                    <li><a href="">Contact</a> </li>
                </ul>
                <div className="bg-blue-400 rounded-full w-9 h-9 mr-10"></div>
            </div>
        </React.Fragment>
    )
}

export default Nav;