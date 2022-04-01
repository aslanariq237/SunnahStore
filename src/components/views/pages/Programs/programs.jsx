import React from "react";
import axios from "axios";


const Task = () => {
    const [task, setTask] = React.useState([]);
    const GetData = async () => {
        await axios.get('http://127.0.0.1:8000/api/barang').then(function (response) {
            let data = response
            setTask(data.data)
        });
    };
    React.useEffect(() => {

        GetData()

    }, []);
    console.log(task)
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
                    <div className="flex flex-wrap col-span-3 -mx-20 my-5 space-x-4 space-y-2">
                        {task.map((item, i) => (
                            <div className="Container flex flex-wrap" key={i}>
                                <div className="card border-gray-400 border-2">
                                    <img width={290} src={item.gambar_barang} alt={item.nama_barang} />
                                    <p className="text-lg text-gray-900">{item.nama_barang}</p>
                                    <div className="outline-none border-2 border-gray-600 bg-gray-600 rounded-lg mt-2"></div>
                                    <div className="flex justify-between my-2">
                                        <div>
                                            <p className="text-gray-500 text-md text-left">Harga barang</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-right">Rp.{item.harga_barang}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            // <div className="card border-gray-300 border-2 px-2 py-2" key={i}>
                            //     <div className="justify-center" key={i}>
                            //         <img width={290} src={item.gambar_barang} />
                            //         <div className="md:px-1">
                            //             <p className="text-lg text-gray-900">{item.nama_barang}</p>
                            //             <div className="outline-none border-2 border-gray-600 bg-gray-600 rounded-lg mt-2"></div>
                            //             <div className="flex justify-between my-2">
                            //                 <div>
                            //                     <p className="text-gray-500 text-md text-left">Harga barang</p>
                            //                 </div>
                            //                 <div>
                            //                 <p className="text-sm text-right">Rp.{item.harga_barang}</p>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Task;
