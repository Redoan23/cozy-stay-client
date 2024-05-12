import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




const MyBookings = () => {
    const [bookedData, setBookedData] = useState([])
    const [update, setUpdate] = useState(null)
    const availability = 'Not Available'
    console.log(bookedData)


    useEffect(() => {
        axios.get('http://localhost:5000/booked/user')
            .then(res => {

                console.log(res.data)
                setBookedData(res.data)
            })
    }, [update])

    const handleUpdateDate = (e, id) => {
        e.preventDefault()
        const date = e.target.date.value
        // console.log(id)
        // console.log(date)

        if (!date) {
            return alert('please choose a date to update')
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


    const handleCancelBooking = (id, roomId) => {
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
                    <h3 className=' font-semibold text-5xl text-center pb-5'>All Your Bookings At one Place</h3>
                    <p className=' text-sm text-center text-yellow-500'>manage your bookings like never before</p>
                </div>
                <div>
                    <div className="overflow-x-auto mt-5">
                        <table className="table">
                            < caption className=' pb-5'>
                                <tr className='text-4xl text-center'>
                                    Booked Rooms
                                </tr>
                            </caption>
                            <tbody>
                                {
                                    bookedData.map(room =>
                                        <tr key={room._id} className=' border'>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-parallelogram w-52 h-52">
                                                            <img src={room.imageInfo} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold"> {room.roomName}</div>
                                                        <div className="text-sm opacity-50">{room?.ppn} $</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to={`/reviews/${room.roomId}`}><button className="btn btn-ghost btn-xs bg-orange-500 text-white">Post A Review</button></Link>
                                            </td>
                                            <td>
                                                {/* <button onClick={() => handleUpdateDate(room._id)} className="btn btn-ghost btn-xs bg-green-600 text-white">
                                                    <DatePicker selected={startDate} placeholderText='select a date' className=' border' onChange={(date) => setStartDate(date)} />
                                                    Update Date</button> */}
                                                <form className=' flex items-center gap-2' onSubmit={(e) => handleUpdateDate(e, room._id)}>
                                                    <input className=' border bg-gray-100' type="date" name="date" id="date" />
                                                    <input type="submit" className=' btn btn-ghost btn-xs bg-green-600 text-white' value="Update Date" />
                                                </form>

                                            </td>
                                            <th>
                                                <button onClick={() => handleCancelBooking(room._id, room.roomId)} className="btn btn-ghost btn-xs bg-red-600 text-white">Cancel Booking </button>
                                            </th>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;