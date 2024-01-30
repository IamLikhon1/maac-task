import { useState } from 'react';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="p-1">
            {/* <TopLoaderAnimation progress={progress}setProgress={setProgress}/> */}
            <div className="mx-auto sm:pl-6 lg:pl-8 mt-5">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex items-center">

                            {/* logo */}
                            <Link to='/'> <img src={Logo} alt="Logo" className='ml-3 ' /></Link>

                        </div>

                        <div className="hidden md:block ml-96">
                            <div className="space-x-8 ml-96">
                                <div className='ml-64 space-x-8'>
                                    <Link
                                        // onClick={() => setProgress(100)}
                                        to='/login'
                                        className="bg-[#0052CC] px-8 py-3 rounded-md text-white font-semibold"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        // onClick={() => setProgress(100)}
                                        to='/register'
                                        className="border-2 border-[#0052CC] text-[#0052CC] px-10 py-3 rounded-md  font-semibold hover:bg-[#0052CC] duration-500 hover:text-white"
                                    >
                                        Registration
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#0052CC]  focus:outline-none focus:bg-[#0052CC]  focus:text-white transition duration-500"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <hr className='border-[#C2D2EB] h-[2px] mt-2 hidden lg:block' />

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-3 pt-3 pb-4 space-y-1 sm:px-3 bg-[#0052CC] rounded">
                        <Link
                            to="/login"
                            className="text-black focus:text-white block px-3 py-2 rounded-md text-base font-medium "
                        >
                            Login
                        </Link>
                        <Link
                           to='/register'
                            className="text-black focus:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Registration
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;