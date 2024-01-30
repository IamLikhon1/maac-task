
const FAQSection = () => {
    return (
        <div className="bg-[#0052CC] py-10 my-5">

            <div className="max-w-7xl mx-auto">
                <div className="text-white text-center ">
                    <p className="text-xl">Common Question </p>
                    <h2 className="text-5xl font-semibold mt-5">Frequently asked questions</h2>
                    {/* accordion */}
                    <div className="text-black grid lg:grid-cols-2 lg:gap-5 gap-10 mt-10">
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium ">
                                What kind of data can I see in FieldX?
                            </div>
                            <div className="collapse-content">
                                <p className="text-start text-xl text-[#4E4E4E]">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How do you take payments?
                            </div>
                            <div className="collapse-content">
                                <p className="text-start">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 my-10">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Does Bizzy read my {"customers'"} data?
                            </div>
                            <div className="collapse-content">
                                <p className="text-start">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 my-10">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What makes Bizzy different from other analytics tools?
                            </div>
                            <div className="collapse-content">
                                <p className="text-start">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I also track website analytics on fieldX?
                            </div>
                            <div className="collapse-content">
                                <p className="text-start">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                {"What's"} your refund and cancellation policy?
                            </div>
                            <div className="collapse-content">
                                <p className="text-start">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                            </div>
                        </div>
                    </div>
                    {/* accordion */}
                </div>
            </div>

        </div>
    );
};

export default FAQSection;