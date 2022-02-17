import React from "react";
const Nav = () => {
    return (
        <React.Fragment>
            <div className="
                flex flex-wrap items-center justify-center py-3">
                {/* logo */}
                <div className="">
                </div>

                {/* input form */}
                <div className="w-2/5 px-3">
                    <input type="text" placeholder="Cari Program Amal" className="w-full text-md  rounded-md bg-gray-100 p-2" />
                </div>

                {/* button */}
                {!localStorage.getItem('user_access_token')
                    ?
                    <div className="ml-5">
                        <Link to='/login'>
                            <button className="btn btn-md rounded-md  font-semibold">Masuk</button>
                        </Link>
                        <Link to='/register'>
                            <button className="btn btn-md rounded-md bg-red-500 font-semibold hover:bg-red-400 text-white">Daftar</button>
                        </Link>
                    </div>
                    :
                    <div className="ml-5">

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full bg-white text-sm font-medium text-gray-700">
                                    <div class="">
                                        <div class="w-10 h-10 bg-gray-600 rounded-full mr-2"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span class="text-left font-medium text-gray-800">{localStorage.getItem('name')}</span>
                                        <span class="text-sm text-gray-400">{localStorage.getItem('email')}</span>
                                    </div>
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <form onSubmit={() => nav('/account')}>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'w-full text-left block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Account settings
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </form>
                                        <form onSubmit={logout}>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </form>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>}
            </div>
        </React.Fragment>
    )
}

export default Nav;