import React, { useState } from "react";
import {
    Routes,
    Switch,
    Route,
    Navigate,
    BrowserRouter
} from "react-router-dom";

import Home from "./components/views/pages/Dashbord/carousel/carousel"




const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Navigate replace to='Home' />} />
                <Route path="home" element={<Home/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Rute