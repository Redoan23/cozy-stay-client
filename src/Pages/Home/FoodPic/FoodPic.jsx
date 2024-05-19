import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FoodPic = () => {
    return (
        <div>
            <div className=' flex items-center justify-center lg:flex-row flex-col lg:px-20 px-14'>
                <div className='lg:w-2/3  relative'>
                    <Fade cascade={true}  duration={1300} >
                        <img  className=' lg:w-3/5' src="https://i.ibb.co/hY1R0M3/2149358061.jpg" alt="" />
                    </Fade>
                    <Fade cascade={true} duration={1000}  >
                        <div className=' hover:-translate-y-3 duration-700 ease-in-out absolute w-[380px] h-[500px] lg:block hidden left-[41%] bottom-[-14%] overflow-hidden'>
                            <img className=' w-full' src="https://i.ibb.co/kxZ526r/2148847417.jpg" alt="" />
                        </div>
                    </Fade>
                </div>
                <div className=' lg:w-1/3 space-y-8'>
                    <Fade cascade={true} duration={1000} >
                    <h1 className=' text-white text-5xl font-semibold merriweather-light leading-relaxed'>Featured Flavors: Culinary Delights Showcase</h1>
                    <p className=' text-white inter-font leading-loose text-justify'>Indulge your senses in our curated showcase of culinary wonders! Feast your eyes on a mouthwatering array of featured dishes, each meticulously crafted to tantalize your taste buds. From savory delights to sweet sensations, explore a gastronomic journey through captivating images and enticing titles that will leave you craving for more. Experience the artistry of flavor and presentation as we highlight the best of our culinary creations in this delectable showcase.</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default FoodPic;