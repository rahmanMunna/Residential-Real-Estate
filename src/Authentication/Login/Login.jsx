import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Shared Components/AuthProvider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
// import { Bounce, Flip, toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();



    const { signIn, signInWithGoogle } = useContext(AuthContext)


    function login(email, password) {
        signIn(email, password)
            .then(result => {
                setError('')
                setSuccess(true)
                alert('Login Successful')
                console.log(result.user)
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
            })
    }

    function handleSingInWithGoogle() {
        signInWithGoogle()
            .then(result => {
                navigate('/')
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password);

    }

    useEffect(() => {
        success && navigate(location?.state ? location.state : '/')
    }, [success])


    return (
        <div className='h-screen flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className=" mx-auto w-3/4 md:w-1/2 lg:w-1/2  rounded-xl p-10 bg-slate-300  bg-opacity-40  border-2 border-white">
                <h1 className='text-5xl text-center font-bold  text-white'>Login</h1>
                <form
                    onSubmit={handleSubmit}
                    className="card-body ">
                    <div className="form-control relative">
                        <div className='flex items-center'>
                            <input
                                onChange={() => setError('')}
                                type="Email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered  w-full"
                                required />
                            <div>
                                <FaUser className='text-2xl absolute right-3 bottom-3'></FaUser>
                            </div>
                        </div>
                    </div>
                    <div className="form-control relative">

                        <div className="flex items-center">
                            <input
                                onChange={() => setError('')}
                                type={visible ? 'text' : 'password'}
                                name='password'
                                placeholder="Password"
                                className="input input-bordered w-full "
                                required />
                            <div onClick={() => setVisible(!visible)} className="text-3xl absolute right-3">
                                {
                                    visible ? <FaEyeLowVision></FaEyeLowVision> : <FaEye></FaEye>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='text-xl text-white font-bold  p-2 my-2 '>
                        {
                            error.length > 0 ? <h1 className='text-red-500'>{error}</h1> : <h1 className='text-green-600'>{success}</h1>
                        }
                    </div>

                    <div className="form-control">
                        <button className="btn btn-primary text-xl  text-center lg:text-2xl hover:bg-green-500 hover:text-black">Login</button>
                    </div>
                    <div className='text-xl text-center font-semibold mt-2'>
                        <h1>Don't have an Account?</h1>
                        <Link to='/registration' className='text-2xl text-cyan-500-400 hover:text-fuchsia-700 font-bold'>
                            <span> Register</span>
                        </Link>
                    </div>
                </form>


                <div onClick={handleSingInWithGoogle} className='flex w-1/3 mx-auto items-center justify-center p-2 border bg-white hover:bg-red-500 font-bold rounded-xl relative'>

                    <button className=''><span className='text-2xl text-blue-600'>G</span>oogle</button>
                    {/* <FaGoogle className='absolute left-24 top-3 text-gl text-blue-500'>
                            </FaGoogle> */}


                </div>


            </div>
        </div>
    );
};

export default Login;