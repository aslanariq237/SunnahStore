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
import Detail from "./components/views/pages/pembayaran/detail"
import Login from "./components/views/pages/Auth/Login"
import Register from "./components/views/pages/Auth/Register"




const Rute = () => {
    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" exact element={<Navigate replace to='Home' />} />
                <Route path="home" element={<Home/>}/>
                <Route path="Collection" element={<Collection/>}/>
                <Route path="shop-all" element={<Programs/>}/>
                <Route path="detail" element={<Detail/>}/>
                <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute