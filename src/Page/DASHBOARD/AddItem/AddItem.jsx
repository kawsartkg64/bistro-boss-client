import { useForm } from 'react-hook-form';
import SectionTilte from '../../Shared/sectionTitle/SectionTilte';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItem = () => {

    const Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API
    const Image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`
    
    const axiosPublic = useAxiosPublic()
    const axosSecure = useAxiosSecure();

    const { register, handleSubmit , reset} = useForm()
    const onSubmit = async (data) => {

       const imageFile = { image:data.image[0]};
       const res = await axiosPublic.post(Image_Hosting_Api, imageFile, {
        headers:{
            'content-type': 'multipart/form-data'
        }
       });
       if(res.data.success){
        const menuItem ={
            name:data.name,
            recipe: data.recipe,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price)

        }
        const menuRes = await axosSecure.post('/menu', menuItem)
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name}is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
       }
        console.log(res.data)
    }



    return (
        <div>
            <SectionTilte subHeading="what's new?" heading='add an item'></SectionTilte>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full ">
                        <label>Recipe Name*</label>
                        <input {...register("name", { required: true })}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <div className="form-control w-full ">
                                <label>Category*</label>


                                <select defaultValue="default" {...register("category", { required: true })}
                                    className="select select-bordered w-full ">
                                    <option disabled value="default">Select a Category</option>
                                    <option value="salad">SALAD</option>
                                    <option value="pizza">PIZZA</option>
                                    <option value="soup">SOUPS</option>
                                    <option value="dessert">DESSERTS</option>
                                    <option value="drinks">DRINKS</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full ">
                                <label>Price*</label>
                                <input {...register("price", { required: true })}
                                    type="number" placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>

                        </div>
                        <textarea {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>

                    <div className='form-control w-full my-6'>
                        <input {...register("image", { required: true })}
                            type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className='btn ml-2'>Add Item<FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;