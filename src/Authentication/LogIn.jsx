import logImg from '../assets/others/authentication2.png'
import logBG from '../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {

    const {signinUser} = useContext(AuthContext)
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const logUser = { email, password }
        console.log(logUser);
        signinUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Log In Success",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error =>{
            const errorMessage = error.message
            console.log(errorMessage)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "invalid-credential",
                showConfirmButton: false,
                timer: 1500
              });
        })
        navigate('/')
    }

    const handleCaptch = () => {

        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen  w-full " style={{ backgroundImage: `url(${logBG})`, }} >

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-4/6 lg:text-left">
                    <img className='w-full  ' src={logImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" placeholder="type the text above" name='captcha' ref={captchaRef} className="input input-bordered" required />
                            <button onClick={handleCaptch} className='btn btn-outline btn-xs my-3' >Valited</button>

                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn bg-[#D1A054]">Login</button>
                        </div>
                        <p className='text-center font-medium'>New here? <Link className='text-[#D1A054] font-semibold' to='/signup'>Create a New Account</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;