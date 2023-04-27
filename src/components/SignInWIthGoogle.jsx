import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { contextProvider } from '../Providers/AuthProvider';
import Google from "../assets/google.png";
const SignInWIthGoogle = () => {
    const {signInWith} = useContext(contextProvider);
    const googleProvider = new GoogleAuthProvider();
    function continueWithGoogle() {
        signInWith(googleProvider)
        .then((result) => {
            toast.success('Successful');
        })
        .catch(err => {
            toast.error(err.message.slice(22,-2).replace(/-/g,' '));
        })
    }
    return (
            <div className='border cursor-pointer mt-5 border-gray-600 p-2 text-md flex justify-center items-center gap-5 hover:text-white duration-300' onClick={continueWithGoogle}>Continue with <img className='h-5 w-5' src={Google}/></div>
    );
};

export default SignInWIthGoogle;