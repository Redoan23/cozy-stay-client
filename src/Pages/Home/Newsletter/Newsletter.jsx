import React from 'react';
import img from '../../../../public/cool-background.png'

const Newsletter = () => {
    return (
        <div className=' bg-[url("https://i.ibb.co/8c5qsfP/75506.jpg")] h-[600px] w-full mx-auto bg-cover bg-no-repeat'>
            <div className='  w-full h-full bg-gradient-to-b from-[#1515152e] to-[#15151539]  flex flex-col justify-center'>

                {/* <p className=' text-white text-center w-350px lg:w-[600px] mx-auto'>Dive into the latest highlights and must-reads handpicked just for you. From insightful interviews to thought-provoking articles, this section brings you the best of our newsletter content. Stay informed, inspired, and engaged with our curated selection of stories tailored to your interests.</p> */}
                <div className=' bg-white w-[500px] h-[300px] bg-opacity-65 mx-auto'>
                    <div className=' w-full mx-auto text-center space-y-10 pt-24'>
                        <h3 className=' text-center font-semibold text-5xl text-green-600  '> Newsletter</h3>
                        <input className=' w-[350px] relative rounded-xl bg-white h-10 mx-auto text-white px-3' type="email" placeholder='Your Email Here' name="email" id="email" />
                        <button className=' text-white bg-red-600 p-2 absolute lg:right-[38.5%] rounded-xl'>Subscribe</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;