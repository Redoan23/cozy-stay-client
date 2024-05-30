import axios from 'axios';
import moment from 'moment';
import React from 'react';
import Swal from 'sweetalert2';
import SwalNotification from './SwalNotification';
import { Navigate, useNavigate } from 'react-router-dom';


const RoomAvailability = () => {

    const navigate = useNavigate()

    const handleAvailability = e => {
        e.preventDefault()
        const form = e.target
        const roomName = form.rooms.value
        console.log(roomName)
        const date = form.date.value

        

        if(!date || roomName==='Check Rooms Availability'){
            return alert('Please give correct information')
        }

        axios.get(`http://localhost:5000/rooms/check/${roomName}`)
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

                        // return <SwalNotification data={res.data} ></SwalNotification> //not working


                        Swal.fire({
                            title: "Yay! The room is available on the selected Day",
                            text: "Want to step ahead?",
                            icon: "info",
                            html: `
                            <div class='space-y-5 h-[390px]'>
                              <div class=' flex gap-5 justify-center'>
                                <div><h1 >Do you want to book the room for <span class=' text-red-600 font-semibold'>${date} ?</span></h1></div>
                                <div> <h3 > You will Pay : <span class=' text-red-600 font-semibold ' > ${res.data.ppn} </span> <span class=' text-green-600 font-semibold'> $</span></h3> </div>
                              </div>
                              <div>
                              <div class=' w-full mx-auto flex justify-center' >
                                <img class= w-[400px] h-[360px]' src= ${res.data.singleImg}>
                              </div>
                                 <div>
                                    <h3 class=' text-xl font-semibold' >Description:</h3>
                                    <p> ${(res.data.description).slice(0, 140)}...</p>
                                 </div>
                              </div>
                            </div>
                            `,
                            width: 730,
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "See Details"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                console.log(res.data._id)
                                return navigate(`/roomDetails/${res.data._id}`)
                            }
                        });
                    }
                }

                else {
                    Swal.fire({
                        title: "Yay! The room is available on the selected Day",
                        text: "Want to step ahead?",
                        icon: "info",
                        html: `
                        <div class='space-y-5 h-[390px]'>
                          <div class=' flex gap-5 justify-center'>
                            <div><h1 >Do you want to book the room for <span class=' text-red-600 font-semibold'>${date} ?</span></h1></div>
                            <div> <h3 > You will Pay : <span class=' text-red-600 font-semibold ' > ${res.data.ppn} </span> <span class=' text-green-600 font-semibold'> $</span></h3> </div>
                          </div>
                          <div>
                          <div class=' w-full mx-auto flex justify-center' >
                            <img class= w-[400px] h-[360px]' src= ${res.data.singleImg}>
                          </div>
                             <div>
                                <h3 class=' text-xl font-semibold' >Description:</h3>
                                <p> ${(res.data.description).slice(0, 140)}...</p>
                             </div>
                          </div>
                        </div>
                        `,
                        width: 730,
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "See Details"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log(res.data._id)
                            return navigate(`/roomDetails/${res.data._id}`)
                        }
                    });
                }
            })
    }


    return (
        <div>
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