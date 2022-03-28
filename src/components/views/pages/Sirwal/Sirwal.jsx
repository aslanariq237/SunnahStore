import React from 'react'
import sirwal from "./../../../images/sirwal.jpg"
import sirwal1 from "./../../../images/sirwal1.jpg"
import sirwal2 from "./../../../images/sirwal2.jpg"
import sirwal3 from "./../../../images/sirwal3.jpg"

function Sirwal() {
    const list = [
        {
            judul: 'Gamis',
            action: 'Gamis Kaesang',
            harga: 'Rp.131.465.633',
            siHari: '656',
            img: sirwal,

        },
        {
            action: 'Cadar Bu Fatma',
            harga: 'Rp.7.220.275',
            siHari: '170',
            img: sirwal2,

        },
        {
            action: 'Cadar megawati',
            harga: 'Rp.1.065.585',
            siHari: '292',
            img: sirwal,

        }, {
            action: 'Jubah Pa Soeharto',
            harga: 'Rp.131.465.633',
            siHari: '656',
            img: sirwal3,

        },
        {
            action: 'Sirwal Pa Jokowi',
            harga: 'Rp.7.220.275',
            siHari: '170',
            img: sirwal3,

        },
        {
            action: 'Cadar Kaesang',
            harga: 'Rp.1.065.585',
            siHari: '292',
            img: sirwal,

        }, {
            action: 'Sirwal Mahmud',
            harga: 'Rp.131.465.633',
            siHari: '656',
            img: sirwal2,

        },
        {
            action: 'Jubah Puan',
            harga: 'Rp.7.220.275',
            siHari: '170',
            img: sirwal1,

        },
        {
            action: 'Cadar Puan',
            harga: 'Rp.1.065.585',
            siHari: '292',
            img: sirwal3,

        }, {
            action: 'Sirwal Jusuf',
            harga: 'Rp.131.465.633',
            siHari: '656',
            img: sirwal,
        },
        {
            action: 'Jubah Pa Sutri',
            harga: 'Rp.7.220.275',
            siHari: '170',
            img: sirwal2,

        },
        {
            action: 'Cadar PDIP',
            harga: 'Rp.1.065.585',
            siHari: '292',
            img: sirwal,

        },
    ]
    return(
        <React.Fragment>
            <div className="Container">
                <div className="flex justify-center py-4 bg-slate-500">
                <p className="text-2xl font-semibold text-white">SHOP ALL</p>
                </div>
            <div className=" grid grid-cols-4">
                <div className="Container ml-20 my-5">
                    <p className="text-xl font-semibold text-gray-500 mb-3">Category</p>
                    <input type="checkbox" name="kamees" /> kamees <span className="text-gray-400 text-sm">(192)</span> <br/>
                    <input type="checkbox" name="kamees" /> peci <span className="text-gray-400 text-sm">(92)</span><br/>
                    <input type="checkbox" name="kamees" /> gamis <span className="text-gray-400 text-sm">(124)</span><br/>
                    <input type="checkbox" name="kamees" /> jubah <span className="text-gray-400 text-sm">(142)</span><br/>
                    <p className="text-xl font-semibold mt-4 text-gray-500 mb-3">TYPE</p>
                    <input type="checkbox" name="kamees" /> kamees <span className="text-gray-400 text-sm">(32)</span><br/>
                    <input type="checkbox" name="kamees" /> peci <span className="text-gray-400 text-sm">(62)</span><br/>
                    <input type="checkbox" name="kamees" /> gamis <span className="text-gray-400 text-sm">(32)</span><br/>
                    <input type="checkbox" name="kamees" /> jubah <span className="text-gray-400 text-sm">(62)</span><br/>
                    <p className="text-xl font-semibold mt-4 text-gray-500 mb-3">SIZE</p>
                    <input type="checkbox" name="kamees" /> 1XL <span className="text-gray-400 text-sm">(46)</span><br/>
                    <input type="checkbox" name="kamees" /> 2XL <span className="text-gray-400 text-sm">(82)</span><br/>
                    <input type="checkbox" name="kamees" /> 3XL <span className="text-gray-400 text-sm">(94)</span><br/>
                    <input type="checkbox" name="kamees" /> 4XL <span className="text-gray-400 text-sm">(85)</span><br/>
                    <input type="checkbox" name="kamees" /> M <span className="text-gray-400 text-sm">(07)</span><br/>
                    <input type="checkbox" name="kamees" /> L <span className="text-gray-400 text-sm">(92)</span><br/>
                </div>
                <div className="flex flex-wrap-reverse col-span-3 -mx-20 my-5">
                     {list.map((li, index) => (
                    <div className="card border-gray-300 border-2 px-2 py-2" key={index}>
                        <div className="justify-center" key={index}>
                            <img width={290} src={li.img} />
                            <div className="md:px-1">
                                <p className="text-lg text-gray-900">{li.action}</p>
                                <div className="outline-none border-2 border-gray-600 bg-gray-600 rounded-lg mt-2"></div>
                                <div className="flex justify-between my-2">
                                    <div>
                                        <p className="text-gray-500 text-md text-left">Harga</p>
                                    </div>
                                    <div>
                                    <p className="text-sm text-right">{li.harga}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Sirwal