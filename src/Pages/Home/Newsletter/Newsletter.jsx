import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';
import { FaLocationArrow, FaRegPaperPlane } from 'react-icons/fa';
// import img from '../../../../public/cool-background.png'

const Newsletter = () => {
    return (
        // <div className=' bg-[url("https://i.ibb.co/8c5qsfP/75506.jpg")] h-[600px] w-full mx-auto bg-cover bg-no-repeat'>
        //     <div className='  w-full h-full bg-gradient-to-b from-[#1515152e] to-[#15151539]  flex flex-col justify-center'>

        //         {/* <p className=' text-white text-center w-350px lg:w-[600px] mx-auto'>Dive into the latest highlights and must-reads handpicked just for you. From insightful interviews to thought-provoking articles, this section brings you the best of our newsletter content. Stay informed, inspired, and engaged with our curated selection of stories tailored to your interests.</p> */}
        //         <div className=' bg-white w-[500px] h-[300px] bg-opacity-65 mx-auto'>
        //             <div className=' w-full mx-auto text-center space-y-10 pt-24'>
        //                 <h3 className=' text-center font-semibold text-5xl text-green-600  '> Newsletter</h3>
        //                 <input className=' w-[350px] relative rounded-xl bg-white h-10 mx-auto text-white px-3' type="email" placeholder='Your Email Here' name="email" id="email" />
        //                 <button className=' text-white bg-red-600 p-2 absolute lg:right-[38.5%] rounded-xl'>Subscribe</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className=' px-3 relative'>
            <div>
                <h3 className=' text-yellow-500 pb-10 px-2'>Stay tuned with Cozy Stay</h3>
            </div>
            <div className=' text-white flex lg:flex-row flex-col items-center'>
                <h3 className=' text-5xl font-semibold lg:w-1/2 leading-snug' >Sign Up for Our Newsletter to Receive News, Offers and deals</h3>
                <div className='w-full lg:w-1/2 lg:space-y-4 space-y-10'>
                    <div>
                        <input className=' w-full lg:w-3/4 border-b-2 border-white bg-transparent p-3' type="email" name="email" id="email" placeholder=' Your Email Address' />
                        <div className=' absolute lg:right-[13%] lg:top-[10%] flex items-center gap-2 text-7xl'>
                            <input className='text-lg' type="submit" value="Subscribe" />
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