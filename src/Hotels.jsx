import "./index.css";
import { Link ,useLocation } from "react-router-dom";

export function Hotels() {

  const location = useLocation();
 const searchData = location.state || { location: "" };


const hotels = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    location: "Chennai",
    address: "12 Marina Beach Road, Chennai",
    price: 1500,
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    id: 2,
    name: "Sea View Resort",
    location: "Goa",
    address: "Baga Beach Road, North Goa",
    price: 1500,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  },
  {
    id: 3,
    name: "Royal Comfort Stay",
    location: "Bangalore",
    address: "MG Road, Bangalore",
    price: 1500,
    rating: "4.3",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    id: 4,
    name: "City Light Hotel",
    location: "Mumbai",
    address: "Andheri West, Mumbai",
    price: 1500,
    rating: "4.4",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchData.location.toLowerCase())
  );
  return (
    <div className="hotels-container">
      <h1>{filteredHotels.length > 0 ? "Available Hotels" : ""}</h1>

      <div className="hotels-grid">


         {filteredHotels.length > 0 ? (
         filteredHotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
             <img src={hotel.image} alt={hotel.name} />

            <div className="hotel-info">

              <h3>{hotel.name}</h3>

            <p className="location">{hotel.location}</p>
            <p className="address">{hotel.address}</p>
             <div className="hotel-details">
             <span className="price">₹{hotel.price}/night</span>
              <span className="rating">⭐ {hotel.rating}</span>
                   </div>
                <Link to="/rooms" state={{ hotel: hotel, searchData: searchData }}>
                 <button className="book-btn">View Rooms</button>
                 </Link>
                  </div>
                    </div>
                  ))
                ) :(
                  <div className="no-result">
          <h2>No Hotels Found 😔</h2>
          <p>Try searching with a different location.</p>

          <Link to="/">
            <button className="search-again">Search Again</button>
          </Link>
        </div>
        )}
      </div>
    </div>
  );
  }
