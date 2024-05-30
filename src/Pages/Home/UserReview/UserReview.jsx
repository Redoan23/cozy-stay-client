import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { IoStar } from 'react-icons/io5';

const UserReview = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('https://cozy-stay-server.vercel.app/user/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [])

    return (
        <div className=' mt-10'>
            <Marquee direction='left' speed={50} pauseOnHover={false} >

                <div className=' flex gap-16 pl-10'>
                    {
                        reviews.map(review =>
                            <div key={review._id} className="bg-transparent text-white border-yellow-600 border rounded-lg shadow-xl p-4 min-h-[350px] w-96 flex flex-col space-y-5">
                                <div className=' flex flex-col items-center justify-start'>
                                    <div className="text-4xl font-bold flex items-center justify-center gap-1"><IoStar></IoStar>{review.rating}</div>
                                    <div><h3 className=' font-semibold py-2'>{review?.userName}</h3></div>
                                    <div className=' inter-font'> <p>{review.postingTime}</p> </div>
                                </div>
                                <div className="text-gray-500">{review.comment}</div>
                            </div>)
                    }
                </div>

            </Marquee>
        </div>
    );
};

export default UserReview;