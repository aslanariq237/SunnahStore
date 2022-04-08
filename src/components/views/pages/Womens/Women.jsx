import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { urlBarang } from "./../../../../url"
import { FaStar } from 'react-icons/fa'


const Task = () => {
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
    console.log("dadadadad", task)
    return (
        <React.Fragment>
            <div className="Container">
                <div className="flex justify-center py-4 bg-slate-500">
                    <p className="text-2xl font-semibold text-white">Cadar</p>
                </div>
                <div className=" grid grid-cols-4">
                    <div className="Container ml-20 my-5">
                        <p className="text-xl font-semibold text-gray-500 mb-3">Category</p>
                        <input type="checkbox" name="kamees" /> kamees <span className="text-gray-400 text-sm">(192)</span> <br />
                        <input type="checkbox" name="kamees" /> peci <span className="text-gray-400 text-sm">(92)</span><br />
                        <input type="checkbox" name="kamees" /> gamis <span className="text-gray-400 text-sm">(124)</span><br />
                        <input type="checkbox" name="kamees" /> jubah <span className="text-gray-400 text-sm">(142)</span><br />
                        <p className="text-xl font-semibold mt-4 text-gray-500 mb-3">TYPE</p>
                        <input type="checkbox" name="kamees" /> kamees <span className="text-gray-400 text-sm">(32)</span><br />
                        <input type="checkbox" name="kamees" /> peci <span className="text-gray-400 text-sm">(62)</span><br />
                        <input type="checkbox" name="kamees" /> gamis <span className="text-gray-400 text-sm">(32)</span><br />
                        <input type="checkbox" name="kamees" /> jubah <span className="text-gray-400 text-sm">(62)</span><br />
                        <p className="text-xl font-semibold mt-4 text-gray-500 mb-3">SIZE</p>
                        <input type="checkbox" name="kamees" /> 1XL <span className="text-gray-400 text-sm">(46)</span><br />
                        <input type="checkbox" name="kamees" /> 2XL <span className="text-gray-400 text-sm">(82)</span><br />
                        <input type="checkbox" name="kamees" /> 3XL <span className="text-gray-400 text-sm">(94)</span><br />
                        <input type="checkbox" name="kamees" /> 4XL <span className="text-gray-400 text-sm">(85)</span><br />
                        <input type="checkbox" name="kamees" /> M <span className="text-gray-400 text-sm">(07)</span><br />
                        <input type="checkbox" name="kamees" /> L <span className="text-gray-400 text-sm">(92)</span><br />
                    </div>
                    <div className="flex flex-wrap col-span-3 -mx-32 my-5 space-y-2">
                        {task.map((item, i) => (
                            <div className="Container flex flex-wrap px-2" key={i}>
                                <Link to={`/detail/${item.id}`}>
                                <button>
                                    <div className="card border-gray-400 border-2">
                                        <img width={290} className="h-80 w-72" src={item.gambar_barang} alt={item.nama_barang} />
                                        <p className="text-sm text-gray-900 text-left">{item.nama_barang}</p>
                                        {/* <div className="outline-none border-2 border-gray-600 bg-gray-600 rounded-lg mt-2"></div> */}
                                        <div className="flex text-xs">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <p className="text-xs mt-2 text-left">Rp. {item.harga_barang}</p>
                                    </div>
                                </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Task;
