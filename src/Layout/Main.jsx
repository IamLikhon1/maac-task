import { Outlet } from "react-router-dom";
import Navbar from "../pages/HomePage/Navbar";
import Footer from "../pages/HomePage/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Toaster />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;