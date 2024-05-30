import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { IoStar } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';


const RoomDetails = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [roomData, setRoomData] = useState([])
    const [image, setImage] = useState([])
    const [update, setUpdate] = useState(null)
    const [reviews, setReviews] = useState([])

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

    useEffect(() => {
        axios.get(`http://localhost:5000/user/review/${id}`)
            .then(res => {
                setReviews(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/rooms/${id}`)
            .then(res => {
                console.log(res.data)
                setRoomData(res.data)
                setImage(res.data.img)
            })
            .catch(err => console.log(err))
    }, [update])

    const backgroundImage = roomData?.singleImg ? `url(${roomData.singleImg})` : 'none'




    const handleCheckOut = e => {
        e.preventDefault()
        const form = e.target
        const startDate = form.dateFrom.value
        // const endDate = form.dateTo.value
        const email = form.email.value
        const name = form.name.value
        const availability = roomData?.availability
        const imageInfo = roomData?.singleImg
        const roomName = roomData?.room_type
        const roomId = roomData?._id
        const ppn = roomData?.ppn
        const mainIdOfTheRoom = id
        const userBookingData = { startDate, email, name, imageInfo, roomName, ppn, roomId, mainIdOfTheRoom }

        if (!user) {
            return navigate('/login')
        }

        if (availability === 'Not Available') {
            return Toast.fire({
                icon: "info",
                title: "This room is already booked"
            });
        }

        if (!startDate) {
            return Toast.fire({
                icon: "error",
                title: "Enter the date"
            });
        }
        // if (!endDate) {
        //     return alert('end is empty')
        // }

        Swal.fire({

            text: "You won't be able to revert this!",
            icon: "info",
            html: `
            <div class='space-y-7'>
              <div class=' flex gap-5 justify-center'>
                <div><h1 >You are booking the for <span class=' text-red-600 font-semibold'>${startDate}</span></h1></div>
                <div> <h3 > You will Pay : <span class=' text-red-600 font-semibold ' > ${roomData.ppn} </span> <span class=' text-green-600 font-semibold'> $</span></h3> </div>
              </div>
              <div>
                 <h3 class=' text-xl font-semibold' >Please Read the description again!</h3>
                 <p> ${roomData.description}</p>
              </div>
            </div>
            `,
            title: "Are you sure?",
            width: 1000,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Booking"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put(`http://localhost:5000/rooms/${id}`, { availability, startDate })
                    .then(res => {
                        setUpdate(res.data.modifiedCount)
                        console.log(res.data)

                        // creating a post for the MY Booking page where user can see the details
                        axios.post('http://localhost:5000/booked/user', userBookingData)
                            .then(res => console.log(res.data))
                            .catch(err => console.log(err))
                            
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Booked!",
                                text: " Congratulations! You have successfully booked the room.",
                                icon: "success"
                            });
                        }

                    })

            }
        });

        form.reset()

    }
    return (
        <div>
            <div className=' text-white h-[700px] bg-bottom w-full relative' style={{ backgroundImage }}>
                <div className="absolute flex flex-col h-full w-full justify-center items-center inset-0 bg-gradient-to-b from-[#1515159e] to-transparent space-y-5">
                    <Fade cascade={true} direction='up' duration={1200}>
                        <h3 className=' text-3xl lg:text-5xl font-semibold text-center merriweather-light'>Find every information at one Place</h3>
                        <p className=' lg:w-[600px] text-center w-72 inter-font' >Welcome to your cozy retreat! Below, discover all the details about your delightful haven, carefully crafted for your comfort and enjoyment</p>
                    </Fade>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row-reverse w-full pt-10'>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    speed={900}
                    navigation={true} modules={[Navigation]}
                    className='mySwiper mx-auto w-full'

                >
                    {
                        image.map((img, idx) =>
                            <SwiperSlide key={idx}>
                                <div className=" w-full">
                                    <img className=' w-full h-full' src={img} alt="" />
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>


                <div className=' pt-10 pb-10'>
                    <div className=' text-white space-y-5 px-4'>
                        <Fade cascade={true} duration={1000}>
                            <h3 className='text-3xl font-semibold merriweather-light'>{roomData.room_type}</h3>
                        </Fade>
                        <Fade cascade={true} duration={1300}>
                            <div className=' text-yellow-400 flex gap-4 merriweather-light'>
                                <p>Price : {roomData.ppn} $/ Night</p>
                                <p>Size : {roomData.room_size}</p>
                                <p>Availability : {roomData.availability}</p>
                                {roomData?.special_offers ? <p>Special Offers : {roomData.special_offers}</p> : " "}
                            </div>
                        </Fade>
                    </div>
                    <Fade cascade={true} duration={1600}>
                        <div className=' text-white px-4 pt-10 lg:w-[800px]'>
                            <p>
                                {
                                    roomData.description
                                }
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
            <hr />
            <div className=' py-10'>
                <Fade cascade={true} duration={1000}>
                    <div>
                        <h3 className=' text-white font-semibold text-center pb-10 text-2xl merriweather-light'>Checkout</h3>
                    </div>
                </Fade>
                <form onSubmit={handleCheckOut}>
                    <div className=' grid grid-cols-2 gap-6 p-5 text-white place-items-center'>
                        <div className=' w-full'>
                            <label htmlFor="dateFrom">Booking Date :</label>
                            <input className=' w-full p-1 text-black' type="date" name="dateFrom" id="dateFrom" placeholder='dateFrom' />
                        </div>
                        {/* <div className=' w-full'>
                            <label htmlFor="dateTo">To :</label>
                            <input className=' w-full p-1 text-black' type="date" name="dateTo" id="dateTo" placeholder='dateTO' />
                        </div> */}
                        <div className=' w-full' >
                            <label htmlFor="name">Name :</label>
                            <input className=' w-full p-1 text-black' type="name" name="name" id="name" placeholder='Name' />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor="email">Email :</label>
                            <input className=' w-full p-1' type="email" name="email" id="email" placeholder='email' defaultValue={user?.email} disabled />
                        </div>

                    </div>
                    <Fade cascade={true} direction='up' duration={1500}>
                        <div className=' w-full mx-auto text-center px-5'>
                            <input className=' w-full text-white py-2 bg-yellow-600' type="submit" value="Book Now" />
                        </div>
                    </Fade>
                </form>
            </div>
            <hr />
            <Fade cascade={true} duration={1500}>
                <div>
                    <h3 className=' font-semibold text-white text-center text-5xl py-14 merriweather-light'>User Reviews</h3>
                </div>
            </Fade>
            <Fade cascade={true} duration={1600}>
                <div className=' grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center pb-10'>
                    {
                        reviews.map(review =>
                            <div key={review._id} className="bg-white rounded-lg shadow-lg p-4 min-h-[350px] w-96 flex flex-col space-y-5">
                                <div className=' flex flex-col items-center justify-start'>
                                    <div className="text-4xl font-bold flex items-center justify-center gap-1"><IoStar></IoStar>{review.rating}</div>
                                    <div><h3 className='inter-font font-semibold py-2 '>{review?.userName}</h3></div>
                                    <div> <p>{review.postingTime}</p> </div>
                                </div>
                                <div className="text-gray-500">{review.comment}</div>
                            </div>)
                    }
                </div>
            </Fade>
            <div>
                {
                    reviews.length <= 0 &&
                    <div className=' text-center mx-auto'>
                        <h3 className=' text-white text-center text-3xl py-5'>No Reviews Yet</h3>
                    </div>
                }
            </div>

        </div>
    );
};

export default RoomDetails;