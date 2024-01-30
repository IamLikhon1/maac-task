import { useForm } from "react-hook-form";

const RegionPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const region = data.region;
        const chooseRegion={region}
        console.log(chooseRegion);
        reset();
    }
    return (
        <div>
            <div className="flex justify-between mx-5 mt-16 lg:mt-0 items-center">
                <h2 className="text-[#0C1D37] text-2xl font-semibold ml-4">Region List</h2>
                <div>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-[#0B2E4E] px-7 py-3 rounded-2xl text-white">+  Create New</button>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-[#495057]">Region</h3>
                    <form onSubmit={handleSubmit(onSubmit)}  className="mt-4">
                        <input {...register("region", { required: true })} type="text" name="region" className="py-3 rounded-xl w-full border-2 focus:outline-none pl-3" placeholder="Type Region" />

                        <div className="flex justify-end">
                            <input type="submit" value="Add Region" className="px-7 py-3 bg-[#0B2E4E] text-white rounded-xl mt-5 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default RegionPage;