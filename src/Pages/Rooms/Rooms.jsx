import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Rooms = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    return (
        <div>
            <div className=' bg-[url("https://i.ibb.co/stY0ZtZ/2150897745.jpg")] h-[600px] w-full bg-center  '  >
                <div className=' w-full h-full bg-gradient-to-b from-[#1515156d] to-[#99999900] flex justify-center items-center flex-col space-y-4'>
                    <h3 className=' text-5xl font-semibold text-center text-white'>Welcome to Our Rooms</h3>
                    <p className='text-white '>please select the rooms feel suitable in</p>
                </div>
            </div>
            <div>

                <div className="overflow-x-auto text-white">
                    <table className="table">
                        {/* head */}
                        <thead className=' text-white'>
                            <tr>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Type</th>
                                <th>Job</th>
                                <th>Reviews</th>
                                <th></th>
                            </tr>
                        </thead>
                        {loadedData.map(room => <tbody>
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
                                                <img className=' relative hover:text-center' src={room.singleImg} />
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
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
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