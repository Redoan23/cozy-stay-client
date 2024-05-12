import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'


const RoomDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [roomData, setRoomData] = useState([])
    const [image, setImage] = useState([])
    const [update, setUpdate] = useState(null)

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
        const roomId=roomData?._id
        const ppn = roomData?.ppn
        const userBookingData = { startDate, email, name, imageInfo, roomName, ppn, roomId  }

        if (availability === 'Not Available') {
            return alert('this is already booked you can not book it anymore')
        }

        if (!startDate) {
            return alert('start is empty')
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

                axios.put(`http://localhost:5000/rooms/${id}`, { availability })
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



    }
    return (
        <div>
            <div className=' text-white h-[700px] bg-bottom w-full relative' style={{ backgroundImage }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1515159e] to-transparent"></div>
            </div>

            <div className='flex flex-row-reverse  w-full pt-10'>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    slidesPerGroup={2}
                    speed={900}
                    navigation={true} modules={[Navigation]}
                    className='mySwiper mx-auto w-full '

                >
                    {
                        image.map((img, idx) =>
                            <SwiperSlide key={idx}>
                                <div className=" w-full">
                                    <figure className='h-[500px]'><img src={img} alt="" /></figure>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>


                <div className=' pt-10'>
                    <div className=' text-white space-y-5 px-4'>
                        <h3 className='text-3xl font-semibold'>{roomData.room_type}</h3>
                        <div className=' text-yellow-400 flex gap-4'>
                            <p>Price : {roomData.ppn} $/ Night</p>
                            <p>Size : {roomData.room_size}</p>
                            <p>Availability : {roomData.availability}</p>
                            {roomData?.special_offers ? <p>Special Offers : {roomData.special_offers}</p> : " "}
                        </div>
                    </div>
                    <div className=' text-white px-4 pt-10 lg:w-[800px]'>
                        <p>
                            {
                                roomData.description
                            }
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className=' pt-10'>
                <div>
                    <h3 className=' text-white font-semibold text-center pb-10 text-2xl'>Checkout</h3>
                </div>
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
                    <div className=' w-full mx-auto text-center px-5'>
                        <input className=' w-full text-white py-2 bg-yellow-600' type="submit" value="Book Now" />
                    </div>
                </form>
            </div>
            <hr />

        </div>
    );
};

export default RoomDetails;