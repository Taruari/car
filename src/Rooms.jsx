import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Rooms() {
  const location = useLocation();
  const hotel = location.state?.hotel;
  const navigate = useNavigate();
  const searchData = location.state?.searchData;

  // ⭐ NEW STATE
  const [rooms, setRooms] = useState([]);

  const getRooms = ()=>{
fetch(`https://6971d21632c6bacb12c49d4a.mockapi.io/todos`,{
      method: "GET",
  })
 .then((res) => res.json())
 .then((data) => {
  if (hotel){
    const filteredRooms = data.filter (
      (room) =>
        room.city.toLowerCase () === hotel.location.toLowerCase()
    );
    setRooms(filteredRooms);
   } else {
    setRooms(data);
   }
 });
};
useEffect(()=>{
  getRooms();
},);

//         if (hotel) {
//           // ⭐ filter by city
//           const filtered = data.filter(
//             item => item.city === hotel.location
//           );
//           setRooms(filtered);
//         }
//       });
//   }, [hotel]);

  return (
    <div className="rooms-container">
      {hotel && (
        <div className="selected-hotel">
          <h1>{hotel.name}</h1>
          <p>{hotel.location}</p>
          <p>{hotel.address}</p>
        </div>
      )}

      <h2>Available Rooms</h2>

      {rooms.map((room) => (
        <div className="room-section" key={room.id}>
          <h3>{room.name}</h3>

          <p className="room-price">₹ {room.price} / night</p>

          {/* ⭐ UPDATED IMAGES */}
          <div className="room-images">
            <img src={room.image1} alt={room.name} />
            <img src={room.image2} alt={room.name} />
          </div>

          <button
            className="book-btn1"
            onClick={() => {
              alert("✅ Booking Successful!");
              navigate("/bookings", {
                state: {
                  hotel: hotel,
                  room: {
                    ...room,
                    images: [room.image1, room.image2] // ⭐ IMPORTANT (for bookings page)
                  },
                  searchData: searchData,
                },
              });
            }}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}
