/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { googleLogo ,githubLogo } from '../assets';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import {ToastContainer ,toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../assets/redux/EcommerceSlice';
import { useNavigate } from 'react-router-dom';







const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin =(e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider).then((result)=>{
        const user = result.user;
        dispatch(addUser ({
          _id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
        );
        setTimeout (() => {
          navigate("/");
        }, 1500);
        
        })
        .catch((error)=>{
          console.log(error);
        });

  };


  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      //Sign-out successfully.
      toast.success("Log Out Successfully!");
      dispatch(removeUser());
    })
    .catch((error)=> {
      console.log(error);
    });
  };



    return (
        <div className=' w-full flex flex-col items-center justify-center gap-10 pt-40 pb-[245px]'>
          <div className=' w-full flex items-center justify-center gap-10' >
          <div onClick={handleGoogleLogin} className=' text-base w-60 h-12 tracking-wide border-[1px] border-black 
           rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 '>
           <img className=' w-8' src={googleLogo} alt="googleLogo" />
           <span className=' text-sm text-gray-900 '> Sing in with Google </span>
          </div>
           <button 
            onClick={handleSignOut}
            className=' bg-blue-800 text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-600 duration-300'>
            Sign Out
            </button>
          </div>
          <div className=' w-full flex items-center justify-center gap-10' >
          <div className=' text-base w-60 h-12 tracking-wide border-[1px] border-black 
          rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 '>
           <img className=' w-8' src={githubLogo} alt="githubLogo" />
           <span className=' text-sm text-gray-900 '> Sing in with Github </span>
          </div>
           <button
            className=' bg-blue-800 text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-600 duration-300'>
            Sign Out
            </button>
          </div>
         
        </div>
    );
};

export default Login;