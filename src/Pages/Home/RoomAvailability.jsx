import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import SwalNotification from './SwalNotification';


const RoomAvailability = () => {

    const [roomData, setRoomData] = useState(null)
    const [error, setError] = useState(null)
    const [date, setDate] = useState(null)


    // Swal toast

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



    const handleAvailability = e => {
        e.preventDefault()
        const form = e.target
        const roomName = form.rooms.value
        const date = form.date.value
        setDate(date)

        if (!date || roomName === 'Check Rooms Availability') {
            return Toast.fire({
                icon: 'info',
                text: 'Please give the correct information'
            })
        }

        axios.get(`https://cozy-stay-server.vercel.app/rooms/check/${roomName}`)
            .then(res => {
                console.log(res.data)
                if (res.data.bookedDate) {
                    const bookedDate = res.data.bookedDate
                    const unavailableDate = moment(bookedDate, 'YYYY-MM-DD')
                    const selectedDate = moment(date, 'YYYY-MM-DD')
                    if (selectedDate.isSame(unavailableDate, 'date')) {
                        Swal.fire({
                            title: 'Sorry ( ˘︹˘ )',
                            text: `${roomName} is not available on that day, as it is already booked. Please check the other dates`
                        })
                    }
                    else {
                        setRoomData(res.data)
                    }
                }
                else {
                    setError(res.data)
                }
            })
    }


    return (
        <div>
            {error && <SwalNotification roomData={error} date={date} ></SwalNotification>}
            {roomData && <SwalNotification roomData={roomData} date={date}></SwalNotification>}
            <div className='text-black pt-5'>
                <form onSubmit={handleAvailability} className=' bg-white p-4 bg-opacity-40 rounded-md'>
                    <div className='flex gap-3 items-center justify-center'>
                        <select className=' p-3 rounded-md' name="rooms" id="rooms">
                            <option disabled selected>Check Rooms Availability</option>
                            <option value="Standard Single Room">Standard Single Room</option>
                            <option value="Standard Double Room">Standard Double Room</option>
                            <option value="Luxury Loft">Luxury Loft</option>
                            <option value="Family Room">Family Room</option>
                            <option value="Deluxe Suite">Deluxe Suite</option>
                            <option value="Penthouse Suite">Penthouse Suite</option>
                            <option value="Junior Suite">Junior Suite</option>
                            <option value="Superior Studio">Superior Studio</option>
                            <option value="Executive Suite">Executive Suite</option>
                            <option value="Standard Twin Room">Standard Twin Room</option>
                        </select>
                        <input className='p-3 rounded-md' name='date' id='date' type="date" />

                        <input type="submit" value='Check' className=' text-base bg-yellow-500 border-none text-white text-center btn' />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default RoomAvailability;