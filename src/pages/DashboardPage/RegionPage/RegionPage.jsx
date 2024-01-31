import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ShowRegionData from "./ShowRegionData";

const RegionPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const chooseRegion = { name }
        fetch('https://staging-api.erpxbd.com/api/v1/region', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(chooseRegion)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status == 'fail' || data.status == 'error') {
                    toast.error(data.message)
                }
                else {
                    toast.success('Yes you successfully added the region');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="flex justify-between mx-5 mt-16 lg:mt-0 items-center">
                <h2 className="text-[#0C1D37] text-2xl font-semibold ml-4">Region List</h2>
                <div>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-[#0B2E4E] px-7 py-3 rounded-2xl text-white">+  Create New Region</button>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-[#495057]">Region</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <input {...register("name", { required: true })} type="text" name="name" className="py-3 rounded-xl w-full border-2 focus:outline-none pl-3" placeholder="Type Region" />

                        <div className="flex justify-end">
                            <input type="submit" value="Add Region" className="px-7 py-3 bg-[#0B2E4E] text-white rounded-xl mt-5 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </dialog>
            {/* show data */}
            <ShowRegionData/>
        </div>
    );
};

export default RegionPage;