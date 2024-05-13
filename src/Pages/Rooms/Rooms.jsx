import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Rooms = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const [data, setData] = useState(loadedData)

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
        axios.get('')
    }, [])

    const handleSort = (e) => {
        e.preventDefault()
        const form = e.target
        const from = form.from.value
        const to = form.to.value
        console.log(from, to)

        if (!from) {
            return Toast.fire({
                icon: "error",
                title: "Enter value in the From field"
            });
        }
        if (!to) {
            return Toast.fire({
                icon: "error",
                title: "Enter value in the To field"
            });
        }
        if (from > to) {
            return Toast.fire({
                icon: "error",
                title: "Starting value cannot be bigger than end value"
            });
        }

        axios.get(`http://localhost:5000/rooms/filter?from=${from}&to=${to}`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })

        form.reset()

    }

    return (
        <div>
            <div className=' bg-[url("https://i.ibb.co/stY0ZtZ/2150897745.jpg")] h-[600px] w-full bg-center  '  >
                <div className=' w-full h-full bg-gradient-to-b from-[#1515156d] to-[#99999900] flex justify-center items-center flex-col space-y-4'>
                    <h3 className=' text-5xl font-semibold text-center text-white'>Welcome to Our Rooms</h3>
                    <p className='text-white pb-10'>please select the rooms feel suitable in</p>
                    <div>
                        <div>
                            <h3 className=' text-white text-2xl text-center pb-6'>Filter By Price Range</h3>
                            <form onSubmit={handleSort}>
                                <div className=' flex md:flex-row flex-col items-center gap-5'>
                                    <label htmlFor="from">
                                        <input className=' border-none bg-white  p-2' type="number" name="from" id="from" placeholder='From' />
                                    </label>
                                    <label htmlFor="to">
                                        <input className='border-none p-2' type="number" name="to" id="to" placeholder='To' />
                                    </label>
                                </div>
                                <div className=' text-center pt-3 w-full'>
                                    <input className=' text-white p-2 bg-yellow-500 w-full' type="submit" value="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="overflow-x-auto text-white">
                    <table className="table">
                        {/* head */}
                        <thead className=' text-white text-base' >
                            <tr>
                                <th>Type</th>
                                <th>Price Per Night</th>
                                <th>Reviews</th>
                                <th></th>
                            </tr>
                        </thead>
                        {data.map(room => <tbody key={room._id}>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squire w-48 h-48 overflow-hidden">
                                                <Link to={`/roomDetails/${room._id}`}>
                                                    <img title='click to view details' className=' relative hover:text-center hover:scale-[1.15] duration-300 ease-in-out ' src={room.singleImg} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-2xl pb-3">{room.room_type}</div>
                                            <div className="text-sm text-white hover:opacity-100 opacity-50">Click the image to see details</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{room.ppn} $</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button onClick={() => {
                                        return Toast.fire({
                                            icon: "info",
                                            title: "Book a room to add review"
                                        });
                                    }} className="btn btn-ghost btn-xs bg-yellow-500">Add a Review</button>
                                </th>
                            </tr>
                        </tbody>)
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Rooms;