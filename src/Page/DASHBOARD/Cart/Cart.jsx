import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure =useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })

            }
          });
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-3xl font-medium">Total Order:{cart.length}</h1>
                <h1 className="text-3xl font-medium">Total Order:{totalPrice}</h1>
                <button className="btn btn-warning">Pay</button>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-300 text-black ">
                            <th>
                               Serial
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                   {index}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                      
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button 
                                    onClick={()=>handleDelete(item._id)}
                                    className="btn btn-ghost  text-3xl"><MdDelete className="text-3xl"></MdDelete></button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;