import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const Login = () => {

    const { loginUser, googleSignIn } = useContext(AuthContext)


    // swal notification
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                Toast.fire({
                    icon: "success",
                    title: "Successfully logged in"
                });
            })
            .catch(err => console.error(err))
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                Toast.fire({
                    icon: "success",
                    title: "Successfully logged in"
                });
            })
    }
    return (
        <div className=' '>
            <div className=' bg-[url("https://i.ibb.co/VNLScXP/2151037538-1.jpg")] h-[650px] w-full bg-cover bg-no-repeat]' >
                <div className=' flex flex-col items-center gap-5 justify-center h-full w-full bg-gradient-to-b from-[#1515158b] to-[#99999900]'>
                    <Fade cascade={true} direction='up' duration={1200}>
                        <h3 className=' text-6xl font-semibold text-center text-white'>My Account</h3>
                    </Fade>
                    <Fade cascade={true} direction='up' duration={1600}>
                        <Link to={'/register'}><button className=' shadow-xl w-72 md:w-96 md:px-5 py-3 bg-yellow-600 text-white mx-auto'>Create an Account</button></Link>
                    </Fade>
                </div>
            </div>
            <div className=''>
                <div>
                    <h3 className=' text-4xl font-semibold mt-5 text-white'>Login</h3>
                </div>
                <form onSubmit={handleLogin} className="card-body ">
                    <Fade cascade={true} direction='up' duration={1000}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                    </Fade>
                    <Fade cascade={true} direction='up' duration={1300}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                    </Fade>
                    <Fade cascade={true} direction='up' duration={1500}>
                        <div className=' flex items-center gap-3'>
                            <h1 className=' text-white'>login with social : </h1>
                            <Link onClick={handleGoogle}><span className="text-blue-600 font-semibold">G</span><span className=" text-red-600">o</span><span className=" text-yellow-400">o</span><span className=" text-blue-600">g</span><span className=" text-green-700">l</span><span className="text-red-600">e</span></Link>
                        </div>
                    </Fade>
                    <Fade cascade={true}  duration={3800}>
                        <div >
                            <button className="bg-yellow-600 px-10 py-4 text-center btn-primary">Login</button>
                        </div>
                    </Fade>

                </form>
            </div>
        </div>
    );
};

export default Login;