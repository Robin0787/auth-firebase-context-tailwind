import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from "react-router-dom";
import { contextProvider } from '../Providers/AuthProvider';
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
    if(loading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if(user) {
        return children
    }
    toast.error('Login first');
    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRoute;