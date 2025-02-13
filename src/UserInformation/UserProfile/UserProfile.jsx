import 'animate.css';
import { useContext } from 'react';
import { AuthContext } from '../../Components/Shared Components/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
const UserProfile = () => {

  const { user } = useContext(AuthContext);
  console.log(user)

  const { displayName, email, photoURL, PhoneNumber, emailVerified } = user;
  console.log(displayName, email, photoURL, emailVerified)

  return (
    <div className='h-screen bg-slate-600 py-10 px-5 '>

      <div className='lg:w-1/2 mx-auto text-white flex flex-col items-center border pt-4 border-green-500 '>
        <div>
          {
            photoURL? <img className='text-7xl w-44 h-50 shadow-lg shadow-red-800' src={photoURL} alt="" />:<FaUser className='text-7xl '></FaUser>
          }
        </div>
        <div className=' lg:p-10 lg:mx-auto p-4 rounded-lg w-full'>
          <h1 className='border border-indigo-400 p-4 rounded-xl my-5 text-xl font-semibold'>Name : <span className='text-green-600'>{displayName?.length ? displayName : ''}</span></h1>
          <div className='flex items-center relative'>
            <h1 className='border border-indigo-400 p-4 rounded-xl my-5 lg:text-xl font-semibold w-full'>Email : <span className='text-xl text-green-600'>{email}</span></h1>
            {
              emailVerified ? <button className='g:text-xl text-yellow-50 rounded-xl p-2 bg-gradient-to-r
             from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  
             absolute right-2 border text-center  font-bold'>Verified</button> :
                <button className='lg:text-xl text-yellow-50 rounded-xl p-2 bg-gradient-to-r
             from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  
             absolute right-2 border text-center  font-bold'>Not Verified</button>

            }
          </div>
          <h1 className='border border-indigo-400 p-4 rounded-xl my-5 text-xl overflow-auto font-semibold'>PhotoUrl : <span className='text-blue-500'>{photoURL ? photoURL : ''}</span></h1>
          <h1 className='border border-indigo-400 p-4 rounded-xl my-5 text-xl font-semibold'>Phone number : <span className='text-red-600'>{PhoneNumber ? PhoneNumber : 'Null'}</span></h1>
        </div>
      </div>

    </div>
  );
};

export default UserProfile;