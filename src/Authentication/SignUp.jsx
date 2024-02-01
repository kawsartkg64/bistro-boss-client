import logImg from '../assets/others/authentication2.png'
import logBG from '../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import SocialAuth from './SocialAuth/SocialAuth';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const logUser = { email, password, name }
        console.log(logUser);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up Success",
                    showConfirmButton: false,
                    timer: 1500
                });
                const useInfo = {
                    name: name,
                    email: email,
                }
                axiosPublic.post('users', useInfo)
                    .then(res => {
                        if (res.insertId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Sign Up Success",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        }
                        navigate('/')
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'email-already-in-use and check other issue',
                    showConfirmButton: false,
                    timer: 1500
                });
            })

        event.target.reset()
    }
    return (
        <div className="hero min-h-screen  w-full " style={{ backgroundImage: `url(${logBG})`, }} >

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-4/6 lg:text-left">
                    <img className='w-full' src={logImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054]">Sign Up</button>
                        </div>
                        <p className='text-center font-medium'>Already registered? <Link className='text-[#D1A054] font-semibold' to='/login'>Go to log in</Link></p>
                    
                    </form>
                    <div className='mb-10 mx-auto'>
                        <SocialAuth></SocialAuth>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;