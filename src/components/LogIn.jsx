import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { contextProvider } from "../Providers/AuthProvider";
import SignInWIthGoogle from "./SignInWIthGoogle";


const LogIn = () => {

    const {user, logIn} = useContext(contextProvider);

    function handleLogInSubmit (e) {
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
        .then(result => {toast.success('LogIn Successful'); e.target.reset()})
        .catch(err => {toast.error(err.message.slice(22, -2).replace(/-/g,' '))});
    }

    return (
        <div className="hero min-h-full my-10 bg-base-200 py-10">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold">Login now!</h1>
                    <p className="py-6 w-4/5 mx-auto lg:mx-0 text-justify text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <form className="card-body" onSubmit={handleLogInSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" className="input input-bordered" required/>
                            <label className="label">
                                <button href="#" className="label-text-alt hover:text-blue-500 duration-300">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <Link to={'/register'} className="text-sm mt-2">New Here? <span className="text-blue-500">Register</span></Link>
                        </div>
                        <SignInWIthGoogle />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;