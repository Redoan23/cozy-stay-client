import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SwalNotification = ({ roomData, date }) => {
  console.log(roomData)
  const navigate = useNavigate()

  useEffect(() => {
    Swal.fire({
      title: "Yay! The room is available on the selected Day",
      text: "Want to step ahead?",
      icon: "info",
      html: `
            <div class='space-y-5 h-[390px]'>
              <div class=' flex gap-5 justify-center'>
                <div><h1 >Do you want to book the room for <span class=' text-red-600 font-semibold'>${date} ?</span></h1></div>
                <div> <h3 > You will Pay : <span class=' text-red-600 font-semibold ' > ${roomData.ppn} </span> <span class=' text-green-600 font-semibold'> $</span></h3> </div>
              </div>
              <div>
              <div class=' w-full mx-auto flex justify-center' >
                <img class= w-[400px] h-[360px]' src= ${roomData.singleImg}>
              </div>
                 <div>
                    <h3 class=' text-xl font-semibold' >Description:</h3>
                    <p> ${(roomData.description).slice(0, 140)}...</p>
                 </div>
              </div>
            </div>
            `,
      width: 730,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Booking"
    }).then((result) => {
      if (result.isConfirmed) {
        return navigate(`/roomDetails/${roomData._id}`)
      }
    });
  }, [roomData])
}


export default SwalNotification;