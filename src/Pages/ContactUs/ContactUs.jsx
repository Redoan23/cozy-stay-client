import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className=' bg-[url("https://i.ibb.co/1qbh8cr/2149714382.jpg")] h-[1000px] w-full bg-cover relative'>
                <div className=' text-white z-10 absolute bg-gradient-to-b from-[#15151540] to-transparent w-full h-full flex items-center flex-col justify-center'>

                </div>
            </div>
            <div className='absolute top-36 lg:left-2 left-0 '>
                <section className="bg-gray-200 py-20 bg-opacity-55 ">
                    <div className="container mx-auto px-8 ">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
                                <p className="text-lg text-gray-600 mb-6">Have questions or need assistance? Contact our friendly staff for personalized assistance.</p>
                                <p className="text-lg text-gray-600 mb-6">Phone: +123 456 7890</p>
                                <p className="text-lg text-gray-600 mb-6">Email: info@hotelcozystay.com</p>
                                <p className="text-lg text-gray-600 mb-6">Address: 123 Main Street, Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Opening Hours</h3>
                                <p className="text-lg text-gray-600 mb-6">Monday - Friday: 8:00 AM - 10:00 PM</p>
                                <p className="text-lg text-gray-600 mb-6">Saturday - Sunday: 9:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;