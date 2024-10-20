import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './featuredRoom.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


const FeaturedRooms = () => {

    const [featuredRoom, setFeaturedRoom] = useState([])


    useEffect(() => {
        axios.get('https://cozy-stay-server.vercel.app/rooms')
            .then(res => {
                setFeaturedRoom(res.data)
            })
    }, [])

    // const featuredRoom = [
    //     {
    //         name: 'Luxury King Suite',
    //         img: 'https://i.ibb.co/2dKHx5v/2065.jpg',
    //         description: 'Experience unparalleled luxury in our spacious King Suite, featuring plush furnishings, modern amenities, and panoramic views of the city skyline.'
    //     },
    //     {
    //         name: 'Tranquil Spa Retreat',
    //         img: 'https://i.ibb.co/2dKHx5v/2065.jpg',
    //         description: 'Unwind and rejuvenate in our Tranquil Spa Retreat, offering a serene environment, soothing spa treatments, and a private relaxation area for the ultimate wellness experience.'
    //     },
    //     {
    //         name: 'Sunset View Suite',
    //         img: 'https://i.ibb.co/2dKHx5v/2065.jpg',
    //         description: 'Witness breathtaking sunsets from our Sunset View Suite, featuring a private balcony overlooking the horizon, perfect for romantic getaways or peaceful moments of reflection.'
    //     },
    //     {
    //         name: 'Executive Loft',
    //         img: 'https://i.ibb.co/2dKHx5v/2065.jpg',
    //         description: 'Elevate your stay in our Executive Loft, designed for modern comfort and productivity, with spacious work areas, high-speed internet, and stunning views of the cityscape.'
    //     },
    //     {
    //         name: 'Garden Oasis Room',
    //         img: 'https://i.ibb.co/2dKHx5v/2065.jpg',
    //         description: 'Escape to our Garden Oasis Room, surrounded by lush greenery and tranquil gardens, offering a peaceful retreat and a connection to nature in the heart of the city.'
    //     },
    //     {
    //         name: 'Coastal View Deluxe Room',
    //         img: 'https://i.ibb.co/2dKHx5v/2065.jpg',
    //         description: 'Experience coastal charm in our Deluxe Room with Coastal View, featuring a private balcony overlooking the ocean, gentle sea breezes, and modern coastal-inspired decor.'
    //     }
    // ];


    return (
        <div className=' text-center mx-auto w-full'>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                slidesPerGroup={2}
                speed={400}
                navigation={true} modules={[Navigation]}
                className='mySwiper mx-auto w-4/5'
                loop={Infinity}

            >
                {
                    featuredRoom.slice(4, 10).map((rooms, idx) =>
                        <SwiperSlide key={idx}>
                            <div className="card w-96 rounded-none border-yellow-600 border bg-stone-800 text-white">
                                <figure><img src={rooms.singleImg} alt="Shoes" /></figure>
                                <div className="card-body space-y-3 text-left py-10 px-6">
                                    <Fade cascade={true} direction='up' duration={1100}>
                                        <h2 className="card-title w-full text-2xl font-thin merriweather-light">{rooms.room_type}</h2>
                                    </Fade>
                                    <Fade cascade={true} duration={1500}>
                                        <p className=' font-thin h-28'>{rooms.description.length > 60 ? <div>{rooms.description.slice(0, 160)} . . .</div> : rooms.description}</p>
                                    </Fade>
                                    <Fade cascade={true} duration={1500}>
                                        <div className="card-actions">
                                            <Link to={`/roomdetails/${rooms._id}`} ><button className="btn rounded-none text-center text-white bg-yellow-600 border-none mx-auto w-44">Book Now</button></Link>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </SwiperSlide>)
                }



            </Swiper>


        </div>
    );
};

export default FeaturedRooms;