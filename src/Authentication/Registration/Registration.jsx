import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Shared Components/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const Registration = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate();




    const notifySuccess = () => {
        toast.success('Registration Successful', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
        setTimeout(1000);
    }


    const signUp = (email, password, name, photoUrl) => {
        createUser(email, password)
            .then(result => {
                setError('')
                setSuccess(true)

                updateUserProfile(name, photoUrl, '')
                    .then(() => {
                        notifySuccess();
                        {
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                transition={Flip}
                            />
                        }
                        navigate('/')

                    })
                    .catch(error => {
                        console.log(error.message)
                    })

                console.log(result.user)



            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
            })
    }

    const emailValidation = email => {
        if (email.includes('@gmail.com')) {
            const em = email.split('@')
            if (em[1].includes('gmail.com')) {
                return true
            }
        }
        setError('Email is Incorrect')
        return false;
    }

    const passwordValidation = password => {

        if (password.length >= 6) {
            //setError('Password must be consist of 6 character')
            if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[!@#$%^&*]/.test(password)) {
                //setError("password should contain atleast one number and one special character");
                return true;
            }

        }
        setError('password should contain atleast one number and one special character & consist of 6 character')
        return false
    }

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        if (emailValidation(email) && passwordValidation(password)) {
            setSuccess('')
            signUp(email, password, name, photoUrl);

        }
        console.log(name, password, email)
    }





    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">

            <div className="border-2  mx-auto w-3/4 md:w-1/2 lg:w-1/2 rounded-xl bg-slate-300 bg-opacity-60">
                <h1 className='text-5xl  text-center pt-4 font-semibold text-pink-600'>Registration</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="flex items-center relative">

                        <input
                            onChange={() => setError('')}
                            type="email"
                            name='email'
                            placeholder="email"
                            className="input input-bordered w-full"
                            required />
                        <div className="absolute right-3">
                            <FaUser className="text-2xl"></FaUser>
                        </div>
                    </div>
                    <div className="form-control relative">

                        <div className="flex items-center">
                            <input
                                onChange={() => setError('')}
                                type={visible ? 'text' : 'password'}
                                name='password'
                                placeholder="password"
                                className="input input-bordered w-full "
                                required />
                            <div onClick={() => setVisible(!visible)}
                                className="text-3xl absolute right-3">
                                {
                                    visible ? <FaEyeLowVision></FaEyeLowVision> : <FaEye></FaEye>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center relative">

                        <input type="text"
                            name='name'
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full"
                            required />
                        <div className="absolute right-3">
                            <MdDriveFileRenameOutline className="text-3xl"></MdDriveFileRenameOutline>
                        </div>

                    </div>
                    <div className="form-control">

                        <input type="text"
                            name='photoUrl'
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required />

                    </div>
                    <div className='text-lg text-red-500'>
                        {
                            error.length > 0 && <h1>{error}</h1>
                        }
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-center  lg:text-3xl hover:bg-orange-600">Register</button>
                    </div>
                    <div className='text-xl text-center font-semibold mt-2'>
                        <h1>Already have an account?</h1>
                        <Link to='/login' className='text-2xl  text-blue-600 font-bold hover:text-orange-600'>
                            <span> Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;