import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="flex justify-center items-center gap-10 py-6 text-white bg-gray-700">
            <Link to={'/'}>Home</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/logIn'}>LogIn</Link>
        </nav>
    );
};

export default Header;