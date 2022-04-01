import React from "react";
import axios from "../../../../../api/axiosClient";
import Images from "../../../../images/gibran2.png";
 
const login = () => {
  return (
    <div className="justify-center my-20 md:ml-36">
      <div className="max-w-md w-full mx-auto">
        <div className="">
          <img src={Images} className="h-20 w-50 " />
        </div>
        <div className="text-center text-lg font-mono mt-5 font-bold">
          YOUR ACCOUNT FOR EVERYTHING
          <p>IN AZ ZAHRA</p>
        </div>
      </div>
      <div className="max-w-md w-full mx-auto  bg-white p-8">
        <form action="" className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded "
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Keep me signed in
              </label>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-600">
                <a href="/login"> Forgotten Password??</a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm">
            By Logging in, you agree to Azzahra's{" "}
            <a href="/" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <p>
              <a href="/" className="underline">
                Terms of Use.
              </a>
            </p>
          </div>

          <div>
            <button className="h-14  w-full py-2 px-4 bg-black hover:bg-black rounded-md text-white text-sm">
              SIGN IN
            </button>
          </div>
          <div className="text-sm text-center text-gray-600">Not a member? <a href="./register" className="underline text-black">Join us</a></div>
        </form>
      </div>
    </div>
  );
};

export default login;
