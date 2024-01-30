import { Outlet } from "react-router-dom";
import Navbar from "../pages/HomePage/Navbar";
import Footer from "../pages/HomePage/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;