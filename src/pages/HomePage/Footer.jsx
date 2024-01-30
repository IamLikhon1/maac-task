import footerLogo from '../../assets/FooterLogo.png'
import fb from '../../assets/001-facebook.png'
import twitter from '../../assets/013-twitter.png'
import linkedin from '../../assets/010-linkedin.png'
const Footer = () => {
    return (
        <div className="bg-[#00193D] text-white py-12 ">
            <div>
                <div className="max-w-7xl mx-auto text-center">
                    <img src={footerLogo} className='mx-auto mt-10' alt="" />
                    <p className='mt-5 w-full lg:w-1/2 text-center mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
                    {/* icon */}
                    <div className='mt-10 flex justify-center gap-10'>
                        <img className='cursor-pointer' src={fb} alt="" />
                        <img className='cursor-pointer' src={twitter} alt="" />
                        <img className='cursor-pointer' src={linkedin} alt="" />
                    </div>
                </div>
                <hr className='border-[#C2D2EB] h-[2px] mt-20 hidden lg:block mx-32' />

                <p className='text-center mt-10'>© All rights reserve by <span className='text-[#F60E0E]'>MAAC</span></p>
            </div>

        </div>
    );
};

export default Footer;