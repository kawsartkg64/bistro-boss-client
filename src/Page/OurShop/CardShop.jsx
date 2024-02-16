import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const CardShop = ({item}) => {
  const {user} =useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
    const { name, recipe, image, price, _id } = item

    const handleCart =(item)=>{
      console.log(item)
      if(user && user.email){
        const cartItem ={
          menuId:_id,
          email: user.email,
          name,
          image,
          price,
        }
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the Cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state:{from:location}})
          }
        });
      }
    }
    return (
        <div className="w-full card md:w-96 mx-auto bg-base-100 shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={()=>handleCart(item)}
            className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default CardShop;