import React from "react";
import axios from "axios";
import { urlBarang } from "./url";
import {
    Routes,
    Switch,
    Route,
    Navigate,
    BrowserRouter
} from "react-router-dom";




import { Login, Register} from "./components/auth";
import Home from "./components/views/pages/Dashbord"
import Collection from "./components/views/pages/Collections"
import Womans from "./components/views/pages/Womens"
import Detail from "./components/views/pages/pembayaran/detail"




const Rute = () => {

    const [task, setTask] = React.useState([]);
    const GetData = async () => {
        await axios.get(urlBarang).then(function (response) {
            let data = response
            setTask(data.data)
        });
    };
    React.useEffect(() => {

        GetData()

    }, []);
    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" exact element={<Navigate replace to='Home' />} />
                <Route path="home" element={<Home/>}/>
                <Route path="Collection" element={<Collection/>}/>
                <Route path="womans" element={<Womans/>}/>
                <Route path="detail/:id" element={<Detail task={task}/>}/>
                <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute