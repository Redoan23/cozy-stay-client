import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate()
    return (
        <div className=' bg-white h-screen'>
            <div className=' flex items-center justify-center w-full h-full'>
                <div className=' relative lg:w-[750px] h-[600px] mx-auto '>
                    <img className=' w-full h-full rounded-3xl ' src="https://i.ibb.co/rGD4b1C/1588539-223278-P1-K1-C3-271.jpg" alt="error" />

                </div>

            </div>
                <div className=' absolute lg:bottom-[15%] bottom-[15%] md:bottom-[5%] md:left-[42%] lg:left-[45%] left-[31%] flex items-center flex-col'>
                    
                     <button onClick={()=>navigate('/')} className=' btn-warning btn'>Go Back Home?</button>

                </div>

        </div>
    );
};

export default Error;