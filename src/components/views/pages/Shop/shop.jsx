import React from "react";
import Sirwal from "../../../images/sirwal.jpg";
import {FaStar} from 'react-icons/fa'

const shop = () => {
  return (
    // <div className="container py-5">
    //   <div className="row ">
    //     <div className="col-span-2">
    //       {/* //Image */}
    //       <img src={Sirwal} alt="" className="w-80 h-96" />
    //     </div>
    //     <div className="col-md-5 mt-3">
    //       {/* Tittle product */}
    //       <h2>Sirwal Edan</h2>

    //       <p>$70</p>
    //       <hr />
    //       <div className="form-group">
    //         <label>Size</label>
    //         <select name="" id="" className="form-control">
    //           <option value="1">L</option>
    //           <option value="2">XL</option>
    //           <option value="3">M</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-4 mt-4">
          <div className="col-span-3">
            <img src={Sirwal} alt="" className="" />
          </div>
          <div className="col-span-3">
            <h2>Sirwal Edan</h2>
            <div className="">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              
            </div>
           
            <hr />
            <p className="text-xs font-italic">Produck Made By Afrika</p>

            <div className="form-group mt-10">
              <label>Size</label>
              <select name="" id="" className="form-control">
                <option value="1">L</option>
                <option value="2">XL</option>
                <option value="3">M</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
