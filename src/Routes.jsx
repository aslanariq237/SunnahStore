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
import Sirwal from "./components/views/pages/Sirwal"
import Women from "./components/views/pages/Womens/Women";
import Detail from "./components/views/pages/pembayaran/detail"




const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Navigate replace to='Home' />} />
                <Route path="home" element={<Home/>}/>
                <Route path="Collection" element={<Collection/>}/>
                <Route path="shop-all" element={<Programs/>}/>
                <Route path="womens" element={<Women/>}/>
                <Route path="sirwal" element={<Sirwal/>}/>
                <Route path="detail-pembayaran" element={<Detail/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Rute