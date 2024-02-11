import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../Hooks/Hooks";
import SectionTilte from "../../Shared/sectionTitle/SectionTilte";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu, ,refetch] = useMenu();
    const axiosSecure = useAxiosSecure()


    const handleDelete = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name}has been deleted!`,
                        icon: "success"
                    });
                }


            }
        });
    }

    return (
        <div>
            <SectionTilte subHeading="Hurry Up!" heading='manage all item'></SectionTilte>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateitem/${item._id}`}>
                                        <button className="btn btn-ghost btn-lg"><FaEdit></FaEdit></button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)}
                                        className="btn btn-ghost btn-lg"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;