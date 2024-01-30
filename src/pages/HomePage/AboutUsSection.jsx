import deliveryImg from '../../assets/Pre order vs delivery 1.png'
import sellingImg from '../../assets/Top Selling Routes 1.png'
import avgImg from '../../assets/Avg 1.png'
import ellipse from '../../assets/Ellipse 1.png'
const AboutUsSection = () => {
    return (
        <div className="max-w-7xl mx-auto my-20 lg:my-32">
            <div className='grid lg:grid-cols-2 gap-10'>
                {/* images */}
                <div className='bg-[#F1F6FF] lg:w-[550px] lg:h-[480px] py-5 px-2 rounded-3xl'>
                    <img className='lg:relative left-32 bottom-28 mx-auto lg:mx-0' src={deliveryImg} alt="" />
                    <div className='lg:flex lg:relative bottom-36'>
                        <img className='mx-auto lg:mx-0' src={sellingImg} alt="" />
                        <div className='w-[280px] h-[161px] shadow-md rounded-md'>
                            <img className='w-[280px] h-[161px] mx-auto lg:mx-0' src={avgImg} alt="" />
                        </div>
                    </div>
                </div>
                {/* right-side-text */}
                <div className='text-center lg:text-start'>
                    <p className='text-[#0052CC] text-xl font-medium'>About Us</p>
                    <h2 className='text-[#0B141F] text-5xl font-semibold mt-5'>A dedicated solution for startups and enterprises</h2>
                    <p className='mt-8 text-xl text-[#4E4E4E] mx-1 lg:mx-0'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <hr className='border-[#F0F0F0] h-[2px] mt-10 hidden lg:block' />

                    <div className='mt-10 flex gap-5 lg:gap-7 items-center text-start ml-2'>
                        <img src={ellipse} alt="" />
                        <div>
                            <p className='text-xl text-[#4E4E4E] lg:w-[70%] mb-2'>" Fieldx is for teams that care about their product growth. "</p>
                            <p className='text-[#0B141F] text-xl font-semibold'>CEO, FieldX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;