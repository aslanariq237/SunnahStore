import React from "react";
import NavLogin from "./../../../../Template/navLogin"
import Barang from "./Barang"
import Sidebar from "./../../AdminDashboard/sidebar";

const index = () => {
    return (
        <div className="">
            <div className="font-inter w-full">
                <NavLogin />
            </div>
            <div className="w-full bg-slate-200">
                    <p className="text-2xl flex justify-center py-3">
                        Admin Dashboard
                    </p>
                </div>
            <div className="grid grid-cols-2">
                <div className="sidebar bg-slate-400 mr-96">
                    <Sidebar />
                </div>
                <div className="cols-span-3 bg-slate-500">
                    <Barang />
                </div>
            </div>
        </div>
    )
}

export default index