import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const loginUserInfo = { email, password };
        console.log(loginUserInfo);
        toast.success("yess")
        reset();
    }
    return (
        <div className="BackImageOnBanner py-2">
            <div className="border-2 rounded-3xl mb-20 lg:w-[60%] lg:mx-auto mx-2 mt-10 bg-white shadow">
                <div className="text-center mt-14">
                    <h2 className="text-4xl font-semibold">Welcome Back!</h2>
                    <p className="mt-3 text-[#4E4E4E] text-xl">Please login to your account</p>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="py-10 mx-2 lg:mx-0 px-2">
                    {/* email */}
                    <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />

                    {/* password */}
                    <input type="password" name="password"  {...register("password", { required: true })} placeholder="Password" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />
                    {/* submit button */}
                    <input type="submit" value='Sign in' className="mt-10 w-full lg:w-[80%] py-4 bg-[#0052CC] text-white  rounded-md lg:ml-20 cursor-pointer text-xl" />
                </form>
                <h2 className="mt-7 mb-12 text-center text-xl text-[#0B141F] font-semibold">Don’t have any account?<Link to='/register'> <span className="text-[#0052CC]">Sign Up</span></Link></h2>
            </div>
        </div>
    );
};

export default LoginPage;