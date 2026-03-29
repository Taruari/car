import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";   

export function Bookings(){

const location = useLocation();
const data = location.state;
const navigate = useNavigate();

/* ⭐ ADDED: state to store all bookings */
const [bookings,setBookings] = useState(()=>{
return JSON.parse(localStorage.getItem("bookings")) || [];
});

function formatDate(date){
return new Date(date).toLocaleDateString("en-GB");
}

function cancelBooking(id){

const updatedBookings = bookings.filter(b => b && b.id !== id);

setBookings(updatedBookings);

localStorage.setItem(
"bookings",
JSON.stringify(updatedBookings)
);

}


/* ⭐ MODIFIED: useEffect to save booking and update list */
useEffect(()=>{

if(data){   // ⭐ ADDED safety check

const { hotel, room, searchData } = data;

const newBooking = {
id: Date.now(),
hotel,
room,
searchData
};

/* ⭐ ADDED: merge old bookings + new booking */
const updatedBookings = [newBooking,...bookings];

/* ⭐ ADDED: update state */
(updatedBookings);

/* ⭐ ADDED: save to localStorage */
localStorage.setItem(
"bookings",
JSON.stringify(updatedBookings)
);

}

// eslint-disable-next-line
},[]);

return(

<div className="booking-container">

<h1>All Bookings</h1>  {/* ⭐ MODIFIED title */}

{/* ⭐ ADDED: show message if no bookings */}
{bookings.length === 0 ? (
<h3>No Bookings Found</h3>
) : (

/* ⭐ MODIFIED: show all bookings from state */

(bookings || [])
.filter(b => b && b.id)  
.map(b=>(
<div className="booking-card" key={b.id}>

<p><b>Booking ID:</b> {b.id}</p>

<h2>{b.hotel?.name}</h2>

<p><b>Location:</b> {b.hotel?.location}</p>

<p><b>Address:</b> {b.hotel?.address}</p> 

<p><b>Room:</b> {b.room?.name}</p>

<p><b>Price:</b> ₹ {b.room?.price} / Day</p>
<img 
src={b.room?.images[0]} 
alt={b.room?.name}
width="200"
/>

<p><b>Check-in:</b> {formatDate(b.searchData?.checkin)}</p>

<p><b>Check-out:</b> {formatDate(b.searchData?.checkout)}</p>

<p><b>Guests:</b> {b.searchData?.guests}</p>

<button
className="cancel-btn"
onClick={()=>cancelBooking(b.id)}
>
Cancel Booking
</button>

</div>
))

)}

<div className="booking-actions">

<button
className="home-btn"
onClick={()=>navigate("/")}>
Go To Home
</button>

</div>

</div>

)

}

