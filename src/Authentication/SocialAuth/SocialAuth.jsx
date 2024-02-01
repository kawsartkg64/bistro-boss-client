import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialAuth = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res)
                    })
                    navigate('/')
            })
            .catch()
    }
    return (
        <div className="mx-auto">
            <button onClick={handleGoogle} className="flex justify-center gap-3 btn bg-[#4285F4] items-center">
                <h2 className="text-xl text-center">Google</h2>
                <FaGoogle className="text-xl"></FaGoogle>
            </button>
        </div>
    );
};

export default SocialAuth;