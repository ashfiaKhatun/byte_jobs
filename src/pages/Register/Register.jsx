import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="hero min-h-screen bg-base-300 pb-6">
                <div className="hero-content flex-col">
                    <div className="text-center mt-6 mb-6">
                        <h1 className="text-4xl font-bold">Employee Registration!</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="first-name" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="last-name" placeholder="Last Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <input type="date" name="birthday" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full" required />

                                    <span className="absolute top-4 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary w-full">Register</button>
                            </div>
                        </form>

                        <div className="text-center px-4">
                            <p className="text-base">Are you an Employeer? Please<Link to='/employeer-sign-up'><button className="btn btn-link font-bold">Register Here!</button></Link></p>
                        </div>

                        <div className="text-center px-4 py-2">
                            <p>Already have an account? Please<Link to='/login'><button className="btn btn-link font-bold">Login</button></Link></p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;