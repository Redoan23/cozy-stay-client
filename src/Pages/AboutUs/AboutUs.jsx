import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <div className=' bg-[url("https://i.ibb.co/3dNrX30/10693.jpg")] h-[1500px] md:h-[1100px] w-full bg-bottom mx-auto'>
            <section className=" text-white py-20  bg-gradient-to-b from-[#15151598] to-transparent w-full h-full relative">

                <div className="container mx-auto px-4 mt-20">
                    <Fade duration={1000} direction='up'>
                        <h2 className="text-3xl font-bold text-yellow-500 mb-6">About Us</h2>
                    </Fade>
                    <Fade duration={1200} direction='up'>
                        <p className="text-lg mb-8">
                            Welcome to Hotel CozyStay, where luxury meets comfort. Located in the heart of a bustling city, our hotel offers a tranquil oasis for travelers seeking relaxation and rejuvenation. With state-of-the-art facilities, world-class amenities, and personalized service, we strive to create memorable experiences for every guest.
                        </p>
                    </Fade>
                    <Fade duration={1400} direction='up'>
                        <p className="text-lg mb-8">
                            At Hotel CozyStay, we are committed to exceeding your expectations and ensuring that your stay with us is nothing short of exceptional. Whether you're traveling for business or leisure, our dedicated team is here to cater to your every need, making your visit truly unforgettable.
                        </p>
                    </Fade>
                    <Fade duration={1600} direction='up'>
                        <p className="text-lg mb-8">
                            Experience the warmth and hospitality of Hotel CozyStay and discover why we're the preferred choice for discerning travelers around the world. We look forward to welcoming you soon!
                        </p>
                    </Fade>
                </div>

            </section>

            <section className="bg-gray-100 bg-opacity-80 lg:top-[75%] md:top-[120%] top-[140%]  mx-auto absolute">
                <div className="container mx-auto px-4 border">
                    <div className="collapse-group">
                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium text-gray-800">
                                Hotel Overview
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Welcome to Hotel CozyStay, where luxury meets comfort. Located in the heart of a bustling city, our hotel offers a tranquil oasis for travelers seeking relaxation and rejuvenation. With state-of-the-art facilities, world-class amenities, and personalized service, we strive to create memorable experiences for every guest.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-gray-800">
                                Facilities and Amenities
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Hotel CozyStay offers a wide range of facilities and amenities to ensure a comfortable and enjoyable stay for our guests. From luxurious spa services and fitness centers to delectable dining options and state-of-the-art conference rooms, we have everything you need for a memorable experience.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-gray-800">
                                Accommodation
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Experience unparalleled comfort and elegance in our stylishly appointed rooms and suites. Each accommodation is thoughtfully designed to provide the utmost in relaxation and convenience, with modern amenities and breathtaking views that will leave you feeling refreshed and rejuvenated.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-gray-800">
                                Dining Options
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Indulge your palate with a culinary journey at Hotel CozyStay's exceptional dining venues. From gourmet restaurants serving delectable international cuisine to cozy cafes offering freshly brewed coffee and pastries, there's something to satisfy every taste and craving.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-gray-800">
                                Mission and Values
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Our mission at Hotel CozyStay is to provide exceptional hospitality and create unforgettable memories for our guests. We believe in delivering personalized service, maintaining the highest standards of quality, and fostering a culture of warmth and inclusivity.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-gray-800">
                                History
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Hotel CozyStay has been serving guests since [year]. Over the years, we have evolved and grown, but our commitment to excellence and dedication to guest satisfaction have remained unchanged. Join us as we continue our journey of hospitality and create lasting memories for our guests.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;