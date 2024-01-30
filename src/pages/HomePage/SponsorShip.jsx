import aven from '../../assets/Aven.png'
import amara from '../../assets/Amara.png'
import circle from '../../assets/Circle.png'
import kyan from '../../assets/Kyan.png'
import treva from '../../assets/Treva.png'
const SponsorShip = () => {
    return (
        <div className='max-w-7xl mx-auto mt-32'>
            <div className='mx-2 lg:mx-0'>
                <h2 className='text-[#0052CC] text-center text-4xl'>5,000+ high-impact teams rely on Fieldx</h2>
                <div className='grid grid-cols-3 lg:grid-cols-5 gap-5 mt-14 mb-28'>
                    <img src={aven} alt="" />
                    <img src={amara} alt="" />
                    <img className='mr-3' src={circle} alt="" />
                    <img className='mt-10 lg:mt-0' src={kyan} alt="" />
                    <img className='mt-10 lg:mt-0' src={treva} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SponsorShip;