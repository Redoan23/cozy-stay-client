import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2';

const Review = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const mainIdOfTheRoom = location.state?.mainIdOfTheRoom
    console.log(mainIdOfTheRoom)


    // swal notification
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });


    const handleReview = e => {
        e.preventDefault()


        const form = e.target
        const userName = form.name.value
        const comment = form.comment.value
        const rating = form.rating.value
        const reviewId = id
        const postingTime = moment().format('h:mm:ss A, D/M/YYYY')
        const reviewData = { userName, comment, rating, reviewId, mainIdOfTheRoom, postingTime }
        console.log(reviewData)

        if (!rating || !comment) {
            return Toast.fire({
                icon: "error",
                title: " Please fill all the fields"
            });
        }

        axios.post('http://localhost:5000/user/review', { reviewData }, { withCredentials: true, params: { email: user.email } })
            .then(res => {
                console.log(res.data)
                Toast.fire({
                    icon: "success",
                    title: "Review added successfully. You can find this review in room details"
                });
            })
        form.reset()
    }
    return (
        <div className=' '>
            <div className=' bg-[url("https://i.ibb.co/jZ1Y4Z8/2150315625.jpg")] h-[760px] w-full bg-cover'>
                <div className=' w-full h-full bg-gradient-to-b from-[#15151589] to-transparent flex flex-col gap-4 items-center justify-center'>
                    <h1 className=' text-white text-5xl font-semibold text-center merriweather-light'>Please Share Your Views</h1>
                    <p className='w-80 text-center lg:w-[600px] md:w-[500px] inter-font text-white '>Welcome to our review section! Your feedback is invaluable to us as we continuously strive to enhance your experience. Take a moment to share your thoughts, insights, and suggestions with us.</p>
                </div>


                <div className=' bg-transparent absolute bottom-5 left-[34%]'>
                    <form onSubmit={handleReview} className=' text-black lg:w-[500px] border'>
                        <div className=' grid  gap-4 p-5'>
                            <input placeholder=' username' className=' border' type="text" name='name' id='name' defaultValue={user.displayName} disabled />
                            <input placeholder=' rating' name='rating' className=' border p-1' step='0.1' type="number" min={1} max={5} />
                            {/* <input placeholder=' time' className=' border' type="time" /> */}
                            <textarea name="comment" className=' p-2' placeholder='please write your comment here ' id=""></textarea>
                        </div>
                        <div className=' w-full px-5'>
                            <input type="submit" value="submit" className='px-5 bg-yellow-500 w-full p-1 text-white' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;