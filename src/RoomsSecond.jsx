import "./index.css";

export function RoomsSecond(){

const rooms = [
{
id:1,
name:"Ocean View Suite",
price:5500,
images:[
"https://images.unsplash.com/photo-1611892440504-42a792e24d32",
"https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
"https://images.unsplash.com/photo-1600210492493-0946911123ea"
]
},
{
id:2,
name:"Royal Suite",
price:7200,
images:[
"https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
"https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
"https://images.unsplash.com/photo-1559599189-fe84dea4eb79"
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
price:9000,
images:[
"https://images.unsplash.com/photo-1540518614846-7eded433c457",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
]
}
]

return(
<div className="rooms-container">
<h1>Luxury Rooms</h1>

{rooms.map(room=>(
<div className="room-section" key={room.id}>

<h2>{room.name}</h2>
<p className="room-price">₹ {room.price} / night</p>

<div className="room-images">
{room.images.map((img,i)=>(
<img key={i} src={img} alt={room.name}/>
))}
</div>

<button className="book-btn">Book Now</button>

</div>
))}
</div>
)
}