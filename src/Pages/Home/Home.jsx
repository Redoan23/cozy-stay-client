import React from 'react';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import Map from './Map/Map';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <div className=' relative bg-[url("https://i.ibb.co/znLY5s4/2150497283.jpg")] h-[800px] w-full bg-cover'>
                <div className=' text-white z-10 absolute bg-gradient-to-b from-[#1515159b] to-[#99999900] w-full h-full flex items-center flex-col justify-center gap-5'>
                    <h1 className=' text-8xl font-bold text-center'>COZY STAY</h1>
                    <p className=' text-lg text-yellow-100 text-center font-semibold'>welcome to cozy stay a luxurious hotel in Dhaka</p>
                </div>
            </div>
            {/* featured rooms section */}
            <div className=' mt-24'>
                <div>
                    <h3 className=' text-center text-3xl font-semibold pb-10 text-white'>Rooms</h3>
                    <div>
                        <FeaturedRooms></FeaturedRooms>
                    </div>
                </div>
                <div className=' mt-24'>
                    <Map></Map>
                </div>
                <div className=' mt-32'>
                    <Newsletter></Newsletter>
                </div>
            </div>
        </div>
    );
};

export default Home;