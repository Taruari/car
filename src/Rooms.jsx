import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

export function Rooms() {
  const location = useLocation();
  const hotel = location.state?.hotel;
  const navigate = useNavigate();
  const searchData = location.state?.searchData;
  const roomsData = {
    Goa: [
      {
        id: 1,
        name: "Family Room",
        price: 3500,
        images: [
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        ],
      },
      {
        id: 2,
        name: "Luxury Suite",
        price: 9000,
        images: [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
        ],
      },
      {
        id: 3,
        name: "Single Room",
        price: 1500,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        ],
      },
    ],

    Chennai: [
      {
        id: 1,
        name: "Single Room",
        price: 1500,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        ],
      },
      {
        id: 2,
        name: "Luxury Room",
        price: 2500,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        ],
      },
      {
        id: 3,
        name: "Family  Suite",
        price: 4500,
        images: [
          "https://images.unsplash.com/photo-1560448075-bb485b067938",
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        ],
      },
    ],

    Bangalore: [
      {
        id: 1,
        name: "Luxury Room",
        price: 4200,
        images: [
          "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
          "https://images.unsplash.com/photo-1618220179428-22790b461013",
        ],
      },
      {
        id: 2,
        name: "Family Room",
        price: 3700,
        images: [
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
          "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
        ],
      },
      {
        id: 3,
        name: "Single Room",
        price: 1500,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        ],
      },
    ],

    Mumbai: [
      {
        id: 1,
        name: "Luxury Room",
        price: 4100,
        images: [
          "https://images.unsplash.com/photo-1592229505726-ca121723b8ef",
          "https://images.unsplash.com/photo-1600210492493-0946911123ea",
        ],
      },
      {
        id: 9,
        name: " Luxury Suite",
        price: 10000,
        images: [
          "https://images.unsplash.com/photo-1617806118233-18e1de247200",
          "https://images.unsplash.com/photo-1618220179428-22790b461013",
        ],
      },
      {
        id: 3,
        name: "Single Room",
        price: 1500,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        ],
      },
    ],
  };

  const rooms = hotel ? roomsData[hotel.location] || [] : [];

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

          <div className="room-images">
            {room.images.map((img, i) => (
              <img key={i} src={img} alt={room.name} />
            ))}
          </div>

          <button
            className="book-btn1"
            onClick={() => {
              alert("✅ Booking Successful! Your room has been reserved.");
              navigate("/bookings", {
                state: {
                  hotel: hotel,
                  room: room,
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
