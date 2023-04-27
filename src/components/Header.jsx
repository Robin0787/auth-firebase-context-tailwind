import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { contextProvider } from "../Providers/AuthProvider";


const Header = () => {
    const {user, logOut} = useContext(contextProvider);
    console.log(user);
    const listenLogOut = () => {
        logOut()
        .then(() => {toast.success('Logged Out')})
        .catch(err => {toast.error(err.message).slice(22,-2).replace(/-/g,' ')});
    }

    return (
        <nav className="flex justify-center items-center gap-10 py-6 text-white bg-gray-700">
            <Link to={'/'}>Home</Link>
            <Link to={'/orders'}>Orders</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/logIn'}>LogIn</Link>
            {
                user &&
                <>
                <span>{user.email}</span>
                <span className="cursor-pointer bg-base-200 py-2 px-3 text-sm rounded-xl" onClick={listenLogOut}>Log Out</span>
                </> 
            }
        </nav>
    );
};

export default Header;