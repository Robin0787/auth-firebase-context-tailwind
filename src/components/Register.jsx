import { useContext } from "react";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { contextProvider } from "../Providers/AuthProvider";
const Register = () => {
    const {user, createUser} = useContext(contextProvider);

    console.log(user);
    function handleLogInSubmit (e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(res => {toast.success('Registration Successful');e.target.reset()})
        .catch(err => {toast.error(err.message.slice(22,-2).replace(/-/g,' '))});
    }

    return (
        <div className="hero min-h-full mt-10 bg-base-200 py-10">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold">Register now!</h1>
                    <p className="py-6 w-4/5 md:w-full mx-auto lg:mx-0 text-justify lg:w-4/5 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <form className="card-body" onSubmit={handleLogInSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <Link to={'/logIn'} className="text-sm mt-2">Already have an account? <span className="text-blue-500">LogIn</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;