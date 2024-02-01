import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import {  FaUsers } from 'react-icons/fa';

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data
        }
    })
    const handlemakeAdmin= user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount >0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleDeleteuser = user => {
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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL:</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        users.map((user, index) => <tr key={user._id}><th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                               {
                                user.role === 'admin'? 'Admin':
                                <button
                                onClick={() => handlemakeAdmin(user)}
                                className="btn btn-ghost  text-3xl"><FaUsers className="text-4xl text-white bg-orange-600 rounded p-2 "></FaUsers>
                            </button>
                               }
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteuser(user)}
                                    className="btn btn-ghost  text-3xl"><MdDelete className="text-3xl"></MdDelete>
                                </button>
                            </td>
                        </tr>)
                    }

                    {/* row 2 */}


                </tbody>
            </table>
        </div>
    );
};

export default AllUser;