import monitor from '../../assets/monitor-mobbile.png'
import users from '../../assets/user.png'
import clients from '../../assets/people.png'
import trophy from '../../assets/cup.png'
const Awards = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {/* monitor */}
                <div className='text-center'>
                    <img src={monitor} alt="" className='mx-auto' />
                    <h3 className='text-[#0052CC] text-3xl font-semibold mt-2'>10+</h3>
                    <p className='text-2xl text-[#4E4E4E] mt-3'>Platforms Created</p>
                </div>
                {/* user */}
                <div className='text-center'>
                    <img src={users} alt="" className='mx-auto' />
                    <h3 className='text-[#0052CC] text-3xl font-semibold mt-2'>1559+</h3>
                    <p className='text-2xl text-[#4E4E4E] mt-3'>Total Users</p>
                </div>
                {/* clients */}
                <div className='text-center mt-10 lg:mt-0'>
                    <img src={clients} alt="" className='mx-auto' />
                    <h3 className='text-[#0052CC] text-3xl font-semibold mt-2'>10+</h3>
                    <p className='text-2xl text-[#4E4E4E] mt-3'>Total Clients</p>
                </div>
                {/* trophy */}
                <div className='text-center mt-10 lg:mt-0'>
                    <img src={trophy} alt="" className='mx-auto' />
                    <h3 className='text-[#0052CC] text-3xl font-semibold mt-2'>300 Days</h3>
                    <p className='text-2xl text-[#4E4E4E] mt-3'>In Operations</p>
                </div>
            </div>
        </div>
    );
};

export default Awards;