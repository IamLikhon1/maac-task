import Box from '../../assets/box.png'
import centerPhone from '../../assets/Central phone 2.png'
const Features = () => {
    return (
        <div>
            <hr className='border-[#C2D2EB] h-[2px] mt-2 hidden lg:block' />
            <div className="max-w-7xl mx-auto mt-20">
                <div className="text-center">
                    <p className="text-xl text-[#0052CC]">Products Features </p>
                    <h2 className="text-5xl font-semibold mt-5 text-[#0B141F] mx-2 lg:mx-0">Make more out of your data</h2>
                    {/* main content */}

                    <div className="grid lg:grid-cols-3 gap-10 mt-14 items-center">
                        {/* left-side content */}
                        <div className='lg:mr-10 ml-5 lg:ml-0'>
                            {/* one */}
                            <div className='text-start'>
                                <div className='px-4 py-4 rounded-md shadow-md  flex justify-end items-center w-[70px] h-[70px]'>
                                    <img className='w-[40px] h-[40px]' src={Box} alt="" />
                                </div>
                                <h2 className='text-[#0B141F] text-xl font-semibold my-4'>Real-time analytics</h2>
                                <p className='text-[#4E4E4E]'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                            </div>
                            {/* two */}
                            <div className='text-start my-8'>
                                <div className='px-4 py-4 rounded-md shadow-md  flex justify-end items-center w-[70px] h-[70px]'>
                                    <img className='w-[40px] h-[40px]' src={Box} alt="" />
                                </div>
                                <h2 className='text-[#0B141F] text-xl font-semibold my-4'>Intuitive dashboard</h2>
                                <p className='text-[#4E4E4E]'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                            </div>
                            {/* three */}
                            <div className='text-start'>
                                <div className='px-4 py-4 rounded-md shadow-md  flex justify-end items-center w-[70px] h-[70px]'>
                                    <img className='w-[40px] h-[40px]' src={Box} alt="" />
                                </div>
                                <h2 className='text-[#0B141F] text-xl font-semibold my-4'>Smart suggestions</h2>
                                <p className='text-[#4E4E4E]'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                            </div>
                        </div>
                        {/* middle content */}
                        <div className='relative mx-2'>
         
                                <img className='w-fit h-fits' src={centerPhone} alt="" />
                                <div className='hidden lg:block w-[500px] h-[500px] rounded-full bg-[#0052CC] absolute bottom-24 -left-16 -z-10'>
                                </div>
                        </div>
                        {/* right content */}
                        <div className='lg:ml-14 ml-5'>
                            {/* one */}
                            <div className='text-start'>
                                <div className='px-4 py-4 rounded-md shadow-md  flex justify-end items-center w-[70px] h-[70px]'>
                                    <img className='w-[40px] h-[40px]' src={Box} alt="" />
                                </div>
                                <h2 className='text-[#0B141F] text-xl font-semibold my-4'>Multiple views</h2>
                                <p className='text-[#4E4E4E]'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                            </div>
                            {/* two */}
                            <div className='text-start my-8'>
                                <div className='px-4 py-4 rounded-md shadow-md  flex justify-end items-center w-[70px] h-[70px]'>
                                    <img className='w-[40px] h-[40px]' src={Box} alt="" />
                                </div>
                                <h2 className='text-[#0B141F] text-xl font-semibold my-4'>AI-led diagnoses</h2>
                                <p className='text-[#4E4E4E]'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                            </div>
                            {/* three */}
                            <div className='text-start'>
                                <div className='px-4 py-4 rounded-md shadow-md  flex justify-end items-center w-[70px] h-[70px]'>
                                    <img className='w-[40px] h-[40px]' src={Box} alt="" />
                                </div>
                                <h2 className='text-[#0B141F] text-xl font-semibold my-4'>Responsive</h2>
                                <p className='text-[#4E4E4E]'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                            </div>
                        </div>


                    </div>














                    {/* main content */}
                </div>

            </div>
        </div>
    );
};

export default Features;