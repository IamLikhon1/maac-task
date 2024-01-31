import { useForm } from "react-hook-form";
import ShowAreasData from "./ShowAreasData";
import toast from "react-hot-toast";

const AreaPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const region = data.region;
        const areaChoose = { region, name }
        fetch('https://staging-api.erpxbd.com/api/v1/area', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(areaChoose)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status == 'fail' || data.status == 'error') {
                    toast.error(data.message)
                }
                else {
                    toast.success('Yes you successfully added the area');
                    reset();
                }
            })


    }
    return (
        <div>
            <div className="flex justify-between mx-5 mt-16 lg:mt-0 items-center">
                <h2 className="text-[#0C1D37] text-2xl font-semibold ml-4">Area List</h2>
                <div>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-[#0B2E4E] px-7 py-3 rounded-2xl text-white">+  Create New Area</button>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-[#495057]">Area</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">

                        <select className="py-3 rounded-xl w-full border-2 focus:outline-none pl-3" {...register("region")}>
                            <option value="Select Your Region">Select Your Region</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="CTG">CTG</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Cumilla">Cumilla</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barishal">Barishal</option>
                        </select>

                        <input {...register("name", { required: true })} type="text" name="name" className="py-3 rounded-xl w-full border-2 focus:outline-none pl-3 mt-5" placeholder="Type Region" />

                        <div className="flex justify-end">
                            <input type="submit" value="Add Area" className="px-7 py-3 bg-[#0B2E4E] text-white rounded-xl mt-5 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </dialog>
            {/* show area data */}
            <ShowAreasData />
        </div>
    );
};

export default AreaPage;