import axios from "axios";
import React, {useState} from "react";
import Images from "../../../../images/gibran2.png";

const register = () => {

   const  [registerInput , setRegister] = useState({
    name: "",
    email: "",
    password: "",
   });

   const handleInput = (e) => {
     e.presist();
     setRegister({  
       ...registerInput,[e.target.name]: e.target.value
     });

   }

   const registerSubmit = (e) => {
     e.preverentDefault();
     
     const data = {
       name :registerInput.name,
       email:registerInput.email,
       password:registerInput.password,
     }

     axios.post('http://127.0.0.1:8000/api/register', data).then(res => {

     });
   }
  return (
    <div className="min-h-screen bg-gray-58 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="">
          <img src={Images} className="h-20 w-50 mb-0" />
        </div>
        <div className="text-center text-lg font-mono mt-5 font-extralight">
          BECOME A MEMBER AZ ZAHRA
          <p className="mt-3 text-gray-600 text-xs">
            Create your Member profile and get first acces
            <p>
              to the very best of Azzahra Products,Inspiratio
              <p> and community.</p>
            </p>
          </p>
        </div>
      </div>
      <div className="max-w-md w-full mx-auto  bg-white p-8">
        <form action="" className="space-y-6" onSubmit={registerSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="name" 
              onChange={handleInput}
              value={registerInput.name}
              className="w-full p-2 border border-gray-300 rounded "
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              name="email" 
              onChange={handleInput}
              value={registerInput.email}
              className="w-full p-2 border border-gray-300 rounded "
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password" 
              onChange={handleInput}
              value={registerInput.password}
              className="w-full p-2 border border-gray-300 rounded "
            />
          </div>

          <div className="flex justify-around">
            <div>
              <input type="radio" value="MALE" name="gender" className="" />{" "}
              Male
            </div>
            <div>
              <input type="radio" value="FEMALE" name="gender" /> Female
            </div>
          </div>

          <div>
            <a href="./login">
              <button type="submit" className="h-14 mt-5  w-full py-2 px-4 bg-black hover:bg-black rounded-md text-white text-sm">
                SIGN UP
              </button>
            </a>
          </div>
          <div className="text-sm text-center text-gray-600">
            <a href="./login" className="underline text-black"></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
