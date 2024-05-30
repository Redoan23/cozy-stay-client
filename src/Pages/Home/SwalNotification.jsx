import React from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const SwalNotification = ({ data, date }) => {
    console.log(data)

    console.log(' this component is triggered')

     Swal.fire({
        title: "Yay! The room is available on the selected Day",
        text: "Want to step ahead?",
        icon: "info",
        html: `
                <div class='space-y-5 h-[390px]'>
                  <div class=' flex gap-5 justify-center'>
                    <div><h1 >Do you want to book the room for <span class=' text-red-600 font-semibold'>${date} ?</span></h1></div>
                    <div> <h3 > You will Pay : <span class=' text-red-600 font-semibold ' > ${data.ppn} </span> <span class=' text-green-600 font-semibold'> $</span></h3> </div>
                  </div>
                  <div>
                  <div class=' w-full mx-auto flex justify-center' >
                    <img class= w-[400px] h-[360px]' src= ${data.singleImg}>
                  </div>
                     <div>
                        <h3 class=' text-xl font-semibold' >Description:</h3>
                        <p> ${(data.description).slice(0, 140)}...</p>
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
            console.log(data._id)
            return navigate(`/roomDetails/${data._id}`)
        }
    });
}


export default SwalNotification;