import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const Review = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const mainIdOfTheRoom = location.state?.mainIdOfTheRoom
    console.log(mainIdOfTheRoom)


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
            return alert('fill all the input')
        }

        axios.post('http://localhost:5000/user/review', { reviewData })
            .then(res => { console.log(res.data) })
    }
    return (
        <div className=' '>
            <div className=' bg-[url("https://i.ibb.co/jZ1Y4Z8/2150315625.jpg")] h-[660px] w-full bg-cover'>
                <div className=' w-full h-full bg-gradient-to-b from-[#15151589] to-transparent flex items-center justify-center'>
                    <h1 className=' text-white text-5xl font-semibold text-center'>Please Share Your Views</h1>
                </div>
            </div>
            <div>
                <form onSubmit={handleReview} className=' text-black'>
                    <div className=' grid  gap-4 p-5'>
                        <input placeholder=' username' className=' border' type="text" name='name' id='name' defaultValue={user.displayName} disabled />
                        <input placeholder=' rating' name='rating' className=' border p-1' step='0.1' type="number" min={1} max={5} />
                        {/* <input placeholder=' time' className=' border' type="time" /> */}
                        <textarea name="comment" className=' p-2' placeholder='please write your comment here ' id=""></textarea>
                    </div>
                    <div className=' w-full'>
                        <input type="submit" value="submit" className=' bg-yellow-500 w-full p-1 text-white' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;