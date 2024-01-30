import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useCart = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure= useAxiosSecure()


    const {data: cart=[]} = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart]
};

export default useCart;