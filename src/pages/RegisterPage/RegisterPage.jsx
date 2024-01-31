import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const employeeId = data.employeeId;
        const phoneNumber = data.phoneNumber;
        const password = data.password;
        const passwordConfirm = data.passwordConfirm;
        const role = data.role;
        const registerUserInfo = { name, email, phoneNumber, password, passwordConfirm, role, employeeId };
        fetch('https://staging-api.erpxbd.com/api/v1/users/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(registerUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.status =='fail' || data.status =='error'){
                    toast.error(data.message)
                }
                else{
                    toast.success(data.user.name+ ' ' + 'You have successfully registered')
                    navigate('/login ')
                }
                
            })
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
                    <input type="text" name="employeeId"{...register("employeeId", { required: true })} placeholder="Your ID" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />
                    {/* number */}
                    <input type="text" name="phoneNumber" {...register("phoneNumber", { required: true })} placeholder="Enter Your Mobile Number" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />
                    {/* password */}
                    <input type="password" name="password"  {...register("password", { required: true })} placeholder="Password" className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />

                    {/* confirm password */}
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password"  {...register("passwordConfirm", { required: true })} className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" required />

                    {/* role */}

                    <select className="mt-8 w-full lg:w-[80%] py-4 border-b-2 border-[#E1E1E1] focus:outline-none text-xl text-[#898989] lg:ml-20" {...register("role")}>
                        <option value="Select Your Role">Select Your Role</option>
                        <option value="HUB">HUB</option>
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