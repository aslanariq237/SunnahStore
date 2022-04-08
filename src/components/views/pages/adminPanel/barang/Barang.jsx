import React from 'react'

function Barang() {
    return (
        <div className="min-h-screen bg-gray-58 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto  bg-white p-8">
                <form>
                    <p>Nama Lengkap</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded "
                        />
                    </div>
                    <p className="mt-1">Email Address</p>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded "
                        />
                    </div>
                    <div>
                        <p>Nomor Telephone</p>
                        <input
                            type="number"
                            placeholder="Nomor Telephone"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded "
                        />
                    </div>
                    <div>
                        <p>password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded "
                        />
                    </div>
                    <div>
                        <p>Confirm password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded "
                        />
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
    )
}

export default Barang