import React, { useEffect, useState } from 'react';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import Map from './Map/Map';
import Newsletter from './Newsletter/Newsletter';
import Swal from 'sweetalert2';
import UserReview from './UserReview/UserReview';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from "react-awesome-reveal";
AOS.init();

const Home = () => {

    const [add, setAdd] = useState(false)
    console.log(add)
    const toggleAdd = () => {
        setAdd(!add)
    }

    const classAdd = add == false ? 'none' : 'block'

    useEffect(() => {
        const timeOut = setTimeout(() => {


            Swal.fire({
                imageWidth: 550,
                imageHeight: 400,
                width: 500,
                padding: 0,
                html:
                    `
              <div class="relative h-[550px] overflow-auto p-0">
                        <img src="https://i.ibb.co/znpsbQt/2150683419.jpg" alt="Special Offer" class="absolute inset-0 w-full h-full object-cover blur-md" style="filter: blur(1px);">
                    <div class="absolute inset-0 flex justify-center items-center text-center text-white text-shadow-lg bg-gradient-to-b from-[#1515159b] to-[#99999900]">
                        <div>
                           <h2 class="text-3xl font-bold mb-4 ">Our special offer is going on</h2>
                           <p class="text-xl text-red-100 bg-red-500 p-2">Book 2 rooms, pay for one</p>
                       </div>
                    </div>
             </div> `,
                imageAlt: "Custom image",
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonColor: "#bbbb",
                confirmButtonText: "X",
                confirmButtonAriaLabel: "Close",
                customClass: {
                    confirmButton: 'absolute top-0 rounded-none right-0 p-0 m-0 bg-none border-none text-3xl text-black',
                    popup: ' padding-0 margin-0',

                },
            });


            // toggleAdd()

        }, 1000);

        return () => clearTimeout(timeOut)
    }, [])




    return (
        <div onClick={() => setAdd(false)}>
            <div className=' relative bg-[url("https://i.ibb.co/BsG7K2h/2150497283-1.jpg")] h-[800px] w-full bg-cover'>
                <div className=' text-white z-10 absolute bg-gradient-to-b from-[#1515159b] to-[#99999900] w-full h-full flex items-center flex-col justify-center gap-5'>
                    <h1 className='merriweather-light text-5xl lg:text-8xl font-bold text-center' data-aos='fade-right' data-aos-duration='1200' >COZY STAY</h1>
                    <p className=' inter-font text-xs lg:text-lg text-yellow-100 text-center font-semibold' data-aos='fade-left' data-aos-duration='1900'>welcome to cozy stay a luxurious hotel in Dhaka</p>
                </div>
            </div>

            {/* featured rooms section */}

            <div className=' mt-24'>
                <div>
                    <h3 className=' merriweather-light text-center text-3xl font-semibold pb-10 text-white'>Featured Rooms</h3>

                    <div>
                        <FeaturedRooms></FeaturedRooms>
                    </div>

                </div>
                <div className=' mt-24'>
                    <Map></Map>
                </div>
                <div className=' mt-16'>
                    <div>
                        <h3 className=' merriweather-light font-semibold text-5xl text-center text-white '>User Reviews</h3>
                        <UserReview></UserReview>
                    </div>
                </div>
                <div className=' mt-32'>
                        <Newsletter></Newsletter>
                </div>
            </div>

            {/* <div onClick={toggleAdd} style={{ display: classAdd }}>
                <div className=' absolute ease-in-out top-[28%] left-[41%] z-30 shadow-2xl overlay overflow-hidden'>
                    <div className=' bg-[url("https://i.ibb.co/znpsbQt/2150683419.jpg")] h-[450px] w-[280px] bg-cover style="filter: blur(1px);"'>
                        <div className=' animate-pulse z-40 w-full h-full flex flex-col items-center justify-center  bg-gradient-to-t from-[#15151586] to-[#99999900] space-y-4 '>
                            <h3 className=' text-4xl text-center font-semibold text-white bg-red-700 p-2'>special offer</h3>
                            <h2 className=' text-center text-red-800 bg-white p-2 rounded-2xl'>stay 2 nights pay for 1</h2>
                            <h3 className=' text-red-500 text-center font-bold text-2xl'>only 300$</h3>
                        </div>
                    </div>
                <div className=' absolute top-0 right-0'>
                    <button onClick={toggleAdd} className=' text-2xl font-bold text-white shadow-lg'>X</button>
                </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;