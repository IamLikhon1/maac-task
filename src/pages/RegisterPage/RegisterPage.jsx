import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const name =data.name;
        const email = data.email;
        const userId=data.userId;
        const number = data.number;
        const password = data.password;
        const confirm = data.confirm;
        const role =data.role;
        const registerUserInfo={name,email,number,password,confirm,role,userId};
        console.log(registerUserInfo);
        reset();
    }

    return (
        <div className="BackImageOnBanner py-2">
            <div className="border-2 rounded-3xl mb-20 lg:w-[60%] lg:mx-auto mx-2 mt-10 bg-white shadow">
                <div className="text-center mt-14">
                    <h2 className="text-4xl font-semibold">Create Account</h2>
                    <p className="mt-3 text-[#4E4E4E] text-xl">Fill in the details below to create an account</p>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="py-10 mx-2 lg:mx-0 px-2">
                    {/* name */}
                    <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter Your Full Name" className="w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />

                    {/* email */}
                    <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />
                    {/* id */}
                    <input type="text" name="userId"{...register("userId", { required: true })} placeholder="Your ID" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />
                    {/* number */}
                    <input type="text" name="number" {...register("number", { required: true })} placeholder="Enter Your Mobile Number" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />
                    {/* password */}
                    <input type="password" name="password"  {...register("password", { required: true })} placeholder="Password" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />

                    {/* confirm password */}
                    <input type="password" name="confirm" placeholder="Confirm Password"  {...register("confirm", { required: true })} className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />

                    {/* role */}

                    <select className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" {...register("role")}>
                        <option value="Select Your Role">Select Your Role</option>
                        <option value="Hiring Manager">Hiring Manager</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="HUB">HUB</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="DevOps">DevOps</option>
                        <option value="SQA Engineer">SQA Engineer</option>
                    </select>
                    <br />
                    <p className="lg:ml-20 mt-8 text-lg"><input type="checkbox" /> I read and agree to the <span className="text-[#0052CC] font-semibold hover:underline cursor-pointer">Terms & Conditions</span></p>

                    {/* submit button */}
                    <input type="submit" value='Create Account' className="mt-10 w-full lg:w-[80%] py-4 bg-[#0052CC] text-white  rounded-md lg:ml-20 cursor-pointer text-xl" />
                </form>
                <h2 className="mt-7 mb-12 text-center text-xl text-[#0B141F] font-semibold">Already have an account? <Link to='/login'><span className="text-[#0052CC]">Sign In</span></Link></h2>
            </div>
        </div>
    );
};

export default RegisterPage;