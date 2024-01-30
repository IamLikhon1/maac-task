import tabletImg from '../../assets/tablet 1.png'
import phoneImg from '../../assets/phone 1.png'
const ImagesSection = () => {
    return (
        <div className="mx-2 lg:mx-0 mt-10">
            <img className='h-full mx-auto w-[800px] bg-sky-50 py-3 px-5 rounded' src={tabletImg} alt="" />
            <img className='lg:h-full mx-auto lg:w-[250px] w-[100px] h-fit relative bottom-40 left-24 lg:bottom-96 lg:left-56' src={phoneImg} alt="" />
        </div>
    );
};

export default ImagesSection;