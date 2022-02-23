import React from "react";
import {
    Routes,
    Switch,
    Route,
    Navigate,
    BrowserRouter
} from "react-router-dom";

import Home from "./components/views/pages/Dashbord"
import Collection from "./components/views/pages/Collections"
import Programs from "./components/views/pages/Programs"




const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Navigate replace to='Home' />} />
                <Route path="home" element={<Home/>}/>
                <Route path="Collection" element={<Collection/>}/>
                <Route path="Programs" element={<Programs/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Rute