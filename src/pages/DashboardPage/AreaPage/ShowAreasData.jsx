import { BiSearchAlt } from "react-icons/bi";
import Loader from "../../../components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const ShowAreasData = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['regionData'],
        queryFn: () =>
            fetch('https://staging-api.erpxbd.com/api/v1/area/All/5/1?name=BARGUNA').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <Loader />
    console.log(data);
    return (
        <div className="bg-white px-5 py-5 rounded-xl mt-10 mx-2 my-5 lg:mx-10 lg:my-10 border ">
            <div className="flex justify-center lg:justify-end mr-3 mt-5">
                <div className="border-2 border-[#CED4DA] bg-white rounded-3xl  w-[250px] flex items-center py-2 gap-2">
                    <BiSearchAlt className="text-xl ml-3" />
                    <input type="text" placeholder="Search..." className=" focus:outline-none" />
                </div>
            </div>

            {/* show data */}
            <div className="mt-14">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead >
                            <tr className="flex gap-10 items-center text-base" >
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>SL No.</th>
                                <th>Region</th>
                                <th>Area</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {/* {
                                data?.map((item, index) => (
                                    <tr key={index + 1}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                           {index + 1}
                                        </td>
                                        <td>
                                           {item.name}
                                        </td>
                                        <td>
                                           {item.area}
                                        </td>
                                    </tr>
                                ))
                            } */}

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowAreasData;