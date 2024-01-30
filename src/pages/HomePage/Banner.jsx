const Banner = () => {
    return (


        <div className="max-w-7xl mx-auto flex justify-center mt-10 lg:mt-24 ">

            <div>
                <h2 className="text-4xl lg:text-6xl text-[#0B141F] text-center font-semibold">Analytics that transform your <br /> product inside-out</h2>
                {/* btn */}
                <div className="lg:flex gap-7 mt-14 ml-20 lg:ml-40">
                    <button className="bg-[#0052CC] px-12 py-4 rounded-md text-white font-semibold">Request for Demo</button>
                    <button className="border-2 border-[#0052CC] px-12 lg:px-10 py-4 text-[#0052CC] font-semibold rounded-md mt-5 lg:mt-0">Download</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;