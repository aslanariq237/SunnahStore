import React from "react";
import Images from "./../../images/gibran2.png";
import { Link, useNavigate } from "react-router-dom";
import { urlLogin } from "./../../../url";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";

const Login = () => {
  let nav = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = React.useState([])
  const [password, setPassword] = React.useState([])
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const login = async (e) => {

    await axios.post(urlLogin, {
      email: email,
      password: password,
    }, {
      crossdomain: true
    })
      .then(function (response) {
        const data = response

        if (data.status == 200 || 304) {
          localStorage.setItem('user_access_token', data.data.token)
          localStorage.setItem('email', data.data.user.email)
          localStorage.setItem('name', data.data.user.name)
          localStorage.setItem('role', data.data.role)
          localStorage.setItem('id', data.data.user.id)
          if (localStorage.getItem('role') == 'admin') {
            nav('/home', { replace: true })
          } else {
            nav('/home', { replace: true })
          }
        }
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: e.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
      })

  }
  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="">
          <img src={Images} className="h-20 w-50" />
        </div>
        <div className="text-center text-lg font-mono mt-5 font-bold">
          YOUR ACCOUNT FOR EVERYTHING
          <p>IN AZ ZAHRA</p>
        </div>
      </div>
      <div className="max-w-md w-full mx-auto  bg-white p-8">
        <form action="" className="space-y-6">
          <div className="text-sm text-center text-gray-600">Not a member? <a href="./register" className="underline text-black">Join us</a></div>
        </form>
        <form onSubmit={handleSubmit(login)}>
          {/* Form E-mail */}
          <input className="border-2 p-1 w-full rounded mt-2" type="email"
            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            value={email} onInput={e => setEmail(e.target.value)} />
          {errors.email?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">E-mail wajib diisi !</p>}
          {errors.email?.type === 'pattern' && <p class="mt-1 text-red-500 text-xs italic">E-mail tidak sesuai !</p>}

          {/* Form Password */}
          <p className="mt-3 font-medium">Password</p>
          <input className="border-2 p-1 w-full rounded mt-2" type={passwordShown ? "text" : "password"} name='password'
            value={password} onInput={e => setPassword(e.target.value)}
            {...register('password', { required: true, minLength: 6 })}
          />
          <div className="text-sm items-center mt-2 cursor-pointer hover:font-bold" onClick={togglePasswordVisiblity}>
            <p>{passwordShown ? "Hide Password" : "Show Password"}</p>
          </div>
          {errors.password?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">Password wajib diisi !</p>}
          {errors.password?.type === 'minLength' && <p class="mt-1 text-red-500 text-xs italic">Password Minimal 6 Karakter</p>}
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
          <div className="mt-14">
            {/* Button */}
            <button className="btn hover:bg-red-400 bg-red-500 font-bold btn-xl text-white w-full rounded-md"
              type='submit'>Login</button>

            {/* Belum punya akun? */}
            <div className="grid justify-center mt-2 text-sm">
              <p>Belum Punya Akun ?  <Link to={'/register'}><span className="text-red-500 hover:text-red-400">Daftar</span></Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
