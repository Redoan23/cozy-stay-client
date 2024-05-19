import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Cushion = () => {
    return (
        <div className=' w-full'>
            <div className=' flex items-center justify-between lg:flex-row flex-col lg:px-20 px-14'>
                <div >
                    <div className=' space-y-8 lg:w-3/5'>
                        <Fade cascade={true} duration={1300} >
                            <h1 className=' text-white text-5xl font-semibold merriweather-light leading-relaxed'>Relaxation Redefined: Explore Our Luxurious Couch Collection</h1>
                            <p className=' text-white inter-font leading-loose text-justify'>Sink into comfort and unwind in style with our exquisite selection of couches, meticulously curated to elevate your stay. Whether you're lounging after a day of exploration or simply seeking a tranquil moment, our plush couches offer the perfect retreat. Indulge in ultimate relaxation as you experience the blend of elegance and coziness that defines our hotel's couch section. Discover your ideal spot to unwind and make the most of your stay with us.</p>
                        </Fade>
                    </div>
                </div>
                <div className=' relative'>
                    <Fade cascade={true}  duration={1000} >
                        <img  className=' ' src="https://i.ibb.co/F3QLkzc/roberto-nickson-r-EJxp-Bskj3-Q-unsplash.jpg" alt="" />
                    </Fade>
                    <Fade cascade={true} duration={1000}  >
                        <div className=' hover:-translate-y-3 duration-700 ease-in-out absolute w-[380px] h-[500px] lg:block hidden right-[67%] bottom-[-14%] overflow-hidden'>
                            <img className=' w-full' src="https://i.ibb.co/zSQz8yH/10005.jpg" alt="" />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Cushion;