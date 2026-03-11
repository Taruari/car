import "./index.css";
import { Link } from "react-router-dom";

 export function Hotels () {
const hotels = [
{
id:1,
name:"Grand Palace Hotel",
location:"Chennai",
price:1500,
rating:"4.5",
image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
},
{
id:2,
name:"Sea View Resort",
location:"Goa",
price:1500,
rating:"4.7",
image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
},
{
id:3,
name:"Royal Comfort Stay",
location:"Bangalore",
price:1500,
rating:"4.3",
image:"https://images.unsplash.com/photo-1590490360182-c33d57733427"
},
{
id:4,
name:"City Light Hotel",
location:"Mumbai",
price:1500,
rating:"4.4",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945"
}
]

return(
<div className="hotels-container">

<h1>Our Hotels</h1>

<div className="hotels-grid">

{hotels.map((hotel)=>(
<div className="hotel-card" key={hotel.id}>

<img src={hotel.image} alt={hotel.name}/>

<h3>{hotel.name}</h3>

<p>{hotel.location}</p>

<p>⭐ {hotel.rating}</p>

<p className="price"> Starting Price :₹ {hotel.price} / night</p>
<ul className="button-list">
<li>
<Link to={`/rooms/${hotel.id}`}>
<button>View Rooms</button>
</Link>
</li>
</ul>
</div>
))}

</div>

</div>
)
}

