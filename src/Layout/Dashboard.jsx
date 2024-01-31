import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from '../assets/Logo.png'
import userImg from '../assets/user bg.png'
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-16 ml-1 lg:ml-8 bg-[#F8F8FB]">
                {/* Page content here */}
                <div className="lg:relative lg:bottom-16">
                    <div className="hidden lg:flex justify-end gap-5 items-center pt-5 mr-5">
                        <img src={userImg} alt="" />
                        <p className="text-[#555B6D] text-xl">Henry</p>
                        <MdKeyboardArrowDown className="text-2xl" />
                    </div>
                </div>
                <label htmlFor="my-drawer-2" className=" relative left-16 bottom-5 px-14 py-4 rounded-md border-2 font-semibold   bg-[#0B2E4E] text-white duration-500 drawer-button lg:hidden"> Open Sidebar</label>
                <Outlet />
                <Toaster />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="p-4 w-64 min-h-full bg-white">
                    {/* Sidebar content here */}
                    {/* logo */}
                    <Link to='/'><img src={logo} className="mx-auto" alt="" /></Link>
                    <p className="mt-5 px-3 py-2 rounded-md  text-sm text-[#6A7187] focus:text-[#6A7187] uppercase font-semibold">Menu</p>
                    <div className="ml-10">

                        <p className="mt-5 px-3 py-2 rounded-md  text-sm text-[#6A7187] focus:text-[#6A7187] uppercase font-semibold flex items-center gap-2"><CiLocationOn className="text-3xl" />Geo Information</p>

                        <li className="mt-5 px-3 py-2 rounded-md text-lg  text-[#757575] "><Link className="focus:text-[#0052CC]" to='/dashboard/region'>Region</Link></li>

                        <li className="mt- px-3 py-2 rounded-md text-lg  text-[#757575] focus:text-[#757575]"><Link className="focus:text-[#0052CC]" to='/dashboard/area'>Area</Link></li>

                        <div className="divider"></div>
                        <li className=""><Link className="mt-5 px-3 py-2 rounded-md text-lg font-semibold flex items-center gap-3" to='/'><FaHome className="text-xl" />Home</Link></li>
                    </div>
                </ul>


            </div>
        </div>
    );
};

export default Dashboard;