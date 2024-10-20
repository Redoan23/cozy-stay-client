import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const Register = () => {

    const { createUser, user } = useContext(AuthContext)
    console.log(user)

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


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(res => {

                console.log(res.user)
                const currentUser = res.user
                updateProfile(currentUser, {
                    displayName: name
                })

                Toast.fire({
                    icon: "success",
                    title: "Successfully created account and logged in"
                });

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className=' bg-[url("https://i.ibb.co/t2YZmbV/bluesofalight.jpg")] h-[650px] w-full bg-cover bg-no-repeat'>
                <div className=' flex flex-col items-center gap-5 justify-center h-full w-full bg-gradient-to-b from-[#151515a8] to-[#99999900]'>
                    <Fade cascade={true} direction='up' duration={1000}>
                        <h3 className=' text-6xl font-semibold text-center text-white'>Register Account</h3>
                    </Fade>
                    <Fade  direction='up' duration={1500}>
                        <Link to={'/login'}><button className=' shadow-xl w-72 md:w-96 px-5 py-3 bg-yellow-600 text-white mx-auto'>Login here</button></Link>
                    </Fade>
                </div>
            </div>
            <div>
                <div className='bg-stone-800'>
                    <div>
                        <h3 className=' text-4xl font-semibold pt-5 px-3 text-white'>Register</h3>
                    </div>
                    <form onSubmit={handleRegister} className="card-body ">
                    <Fade cascade={true} direction='up' duration={1100}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                    </Fade>
                    <Fade cascade={true} direction='up' duration={1300}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                    </Fade>
                    <Fade cascade={true} direction='up' duration={1500}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                    </Fade>
                    <Fade cascade={true} duration={5000}>
                        <div className="">
                            <button className="bg-yellow-600 px-10 py-4 text-center btn-primary">Register</button>
                        </div>
                    </Fade>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;