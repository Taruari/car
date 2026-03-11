import "./index.css";
import { BrowserRouter } from "react-router-dom";

export function Rooms() {
const rooms = [
{
id:1,
name:"Deluxe Room",
price:2500,
images:[
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
]
},
{
id:2,
name:"Luxury Suite",
price:4500,
images:[
"https://images.unsplash.com/photo-1560448075-bb485b067938",
"https://images.unsplash.com/photo-1618773928121-c32242e63f39",
"https://images.unsplash.com/photo-1591088398332-8a7791972843"
]
},
{
id:3,
name:"Single Room",
price:1500,
images:[
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
]
},
{
id:4,
name:"Family Room",
price:3500,
images:[
"https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
"https://images.unsplash.com/photo-1566665797739-1674de7a421a",
"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
]
},
{
id:5,
name:"Presidential Suite",
price:6500,
images:[
"https://images.unsplash.com/photo-1540518614846-7eded433c457",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
]
}
]

return(
<div className="rooms-container">

<h1>Our Rooms</h1>

{rooms.map((room)=>(
<div className="room-section" key={room.id}>

<h2>{room.name}</h2>
<p className="room-price">₹ {room.price} / night</p>

<div className="room-images">

{room.images.map((img,index)=>(
<img key={index} src={img} alt={room.name}/>
))}

</div>

<button className="book-btn">Book Now</button>

</div>
))}

</div>
)
}