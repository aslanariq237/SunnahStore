import React, { useRef } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { urlRegister } from "../../../url";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import Images from "./../../images/gibran2.png";

const Register = () => {
    let nav = useNavigate()
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [namaLengkap, setNamaLengkap] = React.useState([])
    const [email, setEmail] = React.useState([])
    const [nomorTelepon, setNomorTelepon] = React.useState([])
    const [password, setPassword] = React.useState([])
    const [conPassword, setConPassword] = React.useState([])
    const [passwordShown, setPasswordShown] = React.useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const registers = (e) => {
        //sementara di commentar
        // e.preventDefault()

        axios.post(urlRegister, {
            name: namaLengkap,
            email: email,
            no_telepon: nomorTelepon,
            password: password,
            password_confirmation: conPassword
        })
            .then(function (response) {
                // console.log(response)
                Swal.fire({
                    icon: 'success',
                    title: 'Sukses Membuat Akun Anda, Silahkan Melakukan Login',
                    showConfirmButton: false,
                    timer: 1500
                }).then(
                    nav('/login')
                )
            }).catch((message) => {
                Swal.fire({
                    icon: 'error',
                    title: message.response.data.message,
                    showConfirmButton: false,
                    timer: 1600
                })
            })
    }

    useEffect(() => {

    }, [])

    const passwords = useRef({});
    passwords.current = watch("password", "");
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

                <form onSubmit={handleSubmit(registers)}>
                    <p>Nama Lengkap</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded "
                            {...register('name', { required: true })}
                            value={namaLengkap} onInput={e => setNamaLengkap(e.target.value)}
                        />
                    </div>
                    {errors.name?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">Nama Lengkap wajib diisi !</p>}
                    {console.log(namaLengkap.length)}
                    <p className="mt-1">Email Address</p>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded "
                            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                            value={email}
                            onInput={e => setEmail(e.target.value)}
                        />
                        {errors.email?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">E-mail wajib diisi !</p>}
                        {errors.email?.type === 'pattern' && <p class="mt-1 text-red-500 text-xs italic">E-mail tidak sesuai !</p>}
                    </div>
                    <div>
                        <p>Nomor Telephone</p>
                        <input
                            type="number"
                            placeholder="Nomor Telephone"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded "
                            {...register('no_telp', { required: true, minLength: 10 })}
                            value={nomorTelepon} onInput={e => setNomorTelepon(e.target.value)}
                        />
                        {errors.no_telp?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">Nomor Telepon wajib diisi !</p>}
                        {errors.no_telp?.type === 'minLength' && <p class="mt-1 text-red-500 text-xs italic">Minimal Nomor Telepon adalah 10-digit !</p>}
                    </div>
                    <div>
                        <p>password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded "
                            {...register('password', { required: true, minLength: 6 })}
                            value={password} onInput={e => setPassword(e.target.value)}
                        />
                        {errors.password?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">Password wajib diisi !</p>}
                        {errors.password?.type === 'minLength' && <p class="mt-1 text-red-500 text-xs italic">Minimal Password adalah 6 karakter !</p>}
                    </div>
                    <div>
                        <p>Confirm password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded "
                            {...register('confirm_password', { required: true, validate: value => value == passwords.current })}
                            value={conPassword} onInput={e => setConPassword(e.target.value)}
                        />
                        {errors.confirm_password?.type === 'required' && <p class="mt-1 text-red-500 text-xs italic">Confirmation Password wajib diisi !</p>}
                        {errors.confirm_password?.type === 'validate' && <p class="mt-1 text-red-500 text-xs italic">Confirm Password tidak cocok !</p>}
                    </div>
                    <div>
                        <a href="./login">
                            <button type="submit" className="h-14 mt-5  w-full py-2 px-4 bg-black hover:bg-black rounded-md text-white text-sm">
                                SIGN UP
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};
{/* <form action="" className="space-y-6" onSubmit={registerSubmit}>
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
                </form> */}

export default Register;
