import React from "react";
import NavLogin from "./../../../Template/navLogin"
import Home from "./home"
import Sidebar from "./sidebar";

const AdminDash = () => {
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
            <div className="grid grid-cols-5">
                <div className="sidebar bg-slate-400">
                    <Sidebar />
                </div>
                <div className="cols-span-4 bg-slate-500">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default AdminDash