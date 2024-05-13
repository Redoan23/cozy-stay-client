import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';
import { FaLocationArrow, FaRegPaperPlane } from 'react-icons/fa';
// import img from '../../../../public/cool-background.png'

const Newsletter = () => {
    return (
        <div className=' px-3 relative pb-40'>
            <hr />
            <div  className=' pt-10' >
                <h3 className=' text-yellow-500 pb-10 px-2 inter-font'>Stay tuned with Cozy Stay</h3>
            </div>
            <div className=' text-white flex lg:flex-row gap-7 flex-col items-center'>
                <h3 className=' merriweather-light text-5xl font-semibold lg:w-1/2 leading-snug' >Sign Up for Our Newsletter to Receive News, Offers and deals</h3>
                <div className='w-full lg:w-1/2 lg:space-y-4 space-y-10'>
                    <div>
                        <input className=' outline-none w-full lg:w-3/4 border-b-2 border-white bg-transparent p-3' type="email" name="email" id="email" placeholder=' Your Email Address' />
                        <div className=' absolute lg:right-[13%] lg:top-[36%] flex items-center gap-2 text-7xl'>
                            <input className='text-lg hover:text-yellow-300 duration-300' type="submit" value="Subscribe" />
                            <FaRegPaperPlane className=' text-xl font-bold' width={'100px'} fontSize={200} />
                        </div>
                    </div>
                    <div className=' flex items-center gap-2'>
                        <input type="checkbox" name="check" id="check" />
                        <p>I agree to the privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;