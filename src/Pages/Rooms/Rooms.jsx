import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import axios from 'axios';

const Rooms = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const [data, setData] = useState(loadedData)

    const handleSort = (e) => {
        e.preventDefault()
        const form = e.target
        const from = form.from.value
        const to = form.to.value
        console.log(from, to)

        if (!from) {
            return alert('you should put at least a value to from')
        }
        if (!to) {
            return alert("put a value in the to box")
        }
        if (from > to) {
            return alert('dude from can not be bigger than to')
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
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Sort by Price Per Night <IoMdArrowDropdown/></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div> */}
                    <div>
                        <div>
                            <h3 className=' text-white text-2xl text-center pb-6'>Filter By Price Range</h3>
                            <form onSubmit={handleSort}>
                                <div className=' flex gap-5'>
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
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Type</th>
                                <th>Price Per Night</th>
                                <th>Reviews</th>
                                <th></th>
                            </tr>
                        </thead>
                        {data.map(room => <tbody key={ room._id}>
                            <tr>
                                {/* <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th> */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squire w-48 h-48">
                                                <Link to={`/roomDetails/${room._id}`}>
                                                    <img title='click to view details' className=' relative hover:text-center' src={room.singleImg} />
                                                </Link>
                                                {/* <div className=' w-full h-full hidden hover:block hover:bg-gradient-to-t from-[#1515159b] to-[#99999900] hover:z-20 '>
                                                    <p className=' absolute top-[50%] left-7 text-white'>click to show details</p>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-2xl">{room.room_type}</div>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{room.ppn} $</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs bg-yellow-500">Add a Review</button>
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