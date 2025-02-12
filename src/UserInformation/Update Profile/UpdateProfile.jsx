import { useContext, useRef } from 'react';
import { AuthContext } from '../../Components/Shared Components/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const UpdateProfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);
    console.log(user)

    const { displayName, email, photoURL, PhoneNumber, emailVerified } = user;
    // console.log(displayName, email, photoURL, emailVerified)

    const nameRef = useRef(null);
    const photoUrlRef = useRef(null);
    const phoneNumberRef = useRef(null);

    const handleUpdateProfile = () => {
        const name = nameRef.current.value.length > 0 ? nameRef.current.value : nameRef.current.placeholder;
        const photo = photoUrlRef.current.value.length > 0 ? photoUrlRef.current.value : photoUrlRef.current.placeholder;
        const phone = phoneNumberRef.current.value.length > 0 ? phoneNumberRef.current.value : phoneNumberRef.current.placeholder;

        const notifySuccess = () => {
            toast.success('Profile Updated Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }


        updateUserProfile(name, photo, phone)
            .then(() => {
                // alert("Profile Updated")
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
                console.log(user)

            })
            .catch(error => {
                alert(error.message)
            })



    }


    return (
        <div className='h-screen bg-slate-600 py-10 px-5 '>

            <div className='lg:w-1/2 mx-auto text-white flex flex-col items-center border pt-4 border-green-500 '>
                <div>
                    {
                        photoURL ? <img className='text-7xl rounded-xl' src={photoURL} alt="" /> : <FaUser className='text-7xl '></FaUser>
                    }
                </div>
                <div className='w-full p-5'>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Name :</h1>
                        <input
                            ref={nameRef}

                            type="text"
                            placeholder={displayName ? displayName : ""}
                            className="input input-bordered 
                           bg-black w-full" />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Photo URL :</h1>
                        <input
                            ref={photoUrlRef}
                            type="text"
                            placeholder={photoURL ? photoURL : "Null"}
                            className="input input-bordered 
                           bg-black w-full" />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Phone Number :</h1>
                        <input
                            ref={phoneNumberRef}
                            type="text"
                            placeholder={PhoneNumber ? PhoneNumber : 'Null'}
                            className="input input-bordered 
                           bg-black w-full" />
                    </div>
                    <div className='py-6'>
                        <button onClick={handleUpdateProfile} className='btn bg-sky-300 text-purple-800 w-full  '>
                            Update
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;