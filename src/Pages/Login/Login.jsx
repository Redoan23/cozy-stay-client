import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        loginUser(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.error(err))
    }
    return (
        <div className=' '>
            <div className=' bg-[url("https://i.ibb.co/VNLScXP/2151037538-1.jpg")] h-[650px] w-full bg-cover bg-no-repeat]' >
                <div className=' flex flex-col items-center gap-5 justify-center h-full w-full bg-gradient-to-b from-[#1515158b] to-[#99999900]'>
                    <h3 className=' text-6xl font-semibold text-center text-white'>My Account</h3>
                    <Link to={'/register'}><button className=' shadow-xl w-96 px-5 py-3 bg-yellow-600 text-white mx-auto'>Create an Account</button></Link>
                </div>
            </div>
            <div className=''>
                <div>
                    <h3 className=' text-4xl font-semibold mt-5 text-white'>Login</h3>
                </div>
                <form onSubmit={handleLogin} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="">
                        <button className="bg-yellow-600 px-10 py-4 text-center btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;