import "./index.css";
import { Link } from "react-router-dom";
export function RoomsSecond(){

const rooms = [
{
id:1,
name:"Ocean View Suite",
price:5500,
type:"Luxury Room",
amenities:["Ocean View 🌊","King Size Bed","Free WiFi","Mini Bar","Private Balcony"],
images:[
"https://images.unsplash.com/photo-1611892440504-42a792e24d32",
"https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
"https://images.unsplash.com/photo-1600210492493-0946911123ea"
]
},

{
id:2,
name:"Single Room",
price:1500,
type:"Basic",
amenities:["Single Bed","Fan","Attached Bathroom"],
images:[
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQLM9-f2ecyfc_Mhdui27TcJC1i8Julr1Cg&s",
"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
]
},
{
id:3,
name:"Family Room",
price:3500,
type:"Family",
amenities:["2 Double Beds","Free WiFi","TV","AC","Extra Space 👨‍👩‍👧‍👦"],
images:[
"https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",

"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
]
},

]

return(
<div className="rooms-container">
<h1>Luxury Rooms</h1>

{rooms.map(room=>(

<div className={`room-section ${room.type.toLowerCase()}`} key={room.id}>

<h2>{room.name}</h2>

{/* ⭐ Room Type Badge */}
<span className="room-type">{room.type}</span>

<p className="room-price">₹ {room.price} / Day</p>

{/* ⭐ Amenities */}
<div className="amenities">
<h4>Amenities:</h4>
<ul>
{room.amenities.map((item,i)=>(
<li key={i}>{item}</li>
))}
</ul>
</div>

<div className="room-images">
{room.images.map((img,i)=>(
<img key={i} src={img} alt={room.name}/>
))}
</div>
<Link to="/">
<button className="book-btn">Book Now</button>
</Link>
</div>

))}

</div>
)
}