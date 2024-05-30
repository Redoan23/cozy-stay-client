import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Fade } from 'react-awesome-reveal';




const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookedData, setBookedData] = useState([])
    const [update, setUpdate] = useState(null)
    const availability = 'Not Available'


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
        axios.get('http://localhost:5000/booked/user', { withCredentials: true, params: { email: user.email } })
            .then(res => {
                console.log(res.data)
                setBookedData(res.data)
            })
            .catch(err => console.log(err))
    }, [update])



    const handleUpdateDate = (e, id) => {
        e.preventDefault()
        const date = e.target.date.value
        // console.log(id)
        // console.log(date)

        if (!date) {
            return Toast.fire({
                icon: "info",
                title: "Please choose a date to update the date"
            });
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You are going to change the booking date",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Go ahead"
        }).then((result) => {

            if (result.isConfirmed) {

                axios.put(`http://localhost:5000/booked/user/${id}`, { date })
                    .then(res => {
                        console.log(res.data)
                        setUpdate(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Booking date has been updated",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleCancelBooking = (id, roomId, startDate) => {

        const currentDate = moment(startDate, "YYYY-MM-DD")
        const today = moment()
        const oneDayBeforeStartDate = currentDate.subtract({ "days": 1 })
        if (today.isSame(oneDayBeforeStartDate,'date')) {

            return Toast.fire({
                icon: "error",
                title: "Booking cannot be canceled before a day of arrival date"
            });
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert the cancellation",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel Booking!"
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/booked/user/${id}`)
                    .then(res => {
                        console.log(res.data)
                        setUpdate(res.data)
                    })
                axios.put(`http://localhost:5000/rooms/${roomId}`, { availability: 'Not Available' })
                    .then(res => console.log(res.data))

                Swal.fire({
                    title: "Canceled!",
                    text: "Your Booking has been canceled.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <div className=' bg-[url("https://i.ibb.co/DQkWbGT/hotel-room-unsplash.jpg")] h-[600px] w-full bg-cover'>
                <div className=' text-white bg-gradient-to-b from-[#151515ac] to-[#2a29293e] h-full w-full flex flex-col items-center justify-center'>
                    <Fade cascade={true} direction='up' duration={1000}>
                        <h3 className=' font-semibold text-5xl text-center pb-5 merriweather-light'>All Your Bookings At one Place</h3>
                        <p className=' text-sm text-center text-yellow-500 inter-font'>manage your bookings like never before</p>
                    </Fade>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mt-5 text-white">
                    <table className="table">
                        < caption className=' pb-5'>
                            <tr className='text-4xl text-center merriweather-light'>
                                Booked Rooms
                            </tr>
                        </caption>
                        <tbody>
                            {
                                bookedData.map(room =>

                                    <tr key={room._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-parallelogram w-52 h-52 overflow-hidden">
                                                        <img className=' hover:scale-[1.15] duration-300 ease-in-out' src={room.imageInfo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold merriweather-light"> {room.roomName}</div>
                                                    <div className="text-sm opacity-50">{room?.ppn} $</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={{ pathname: `/reviews/${room.roomId}`, state: { mainIdOfTheRoom: room.mainIdOfTheRoom } }}><button className="btn btn-ghost btn-xs bg-orange-500 text-white">Post A Review</button></Link>
                                        </td>
                                        <td>
                                            <form className=' flex items-center gap-2' onSubmit={(e) => handleUpdateDate(e, room._id)}>
                                                <input className=' border bg-gray-100 text-black' type="date" name="date" id="date" />
                                                <input type="submit" className=' btn btn-ghost btn-xs bg-green-600 text-white' value="Update Date" />
                                            </form>

                                        </td>
                                        <th>
                                            <button onClick={() => handleCancelBooking(room._id, room.roomId, room.startDate)} className="btn btn-ghost btn-xs bg-red-600 text-white">Cancel Booking </button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyBookings;