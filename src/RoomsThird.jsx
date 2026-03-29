import "./index.css";

export function RoomsThird(){

const rooms = [
{
id:1,
name:"Mountain View Suite",
price:4800,
images:[
"https://images.unsplash.com/photo-1590490359683-658d3d23f972",
"https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
"https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f"
]
},
{
id:2,
name:"Premium Deluxe Room",
price:4200,
images:[
"https://images.unsplash.com/photo-1600585152915-d208bec867a1",
"https://images.unsplash.com/photo-1618220179428-22790b461013",
"https://images.unsplash.com/photo-1582582621959-48d27397dc69"
]
},
{
id:3,
name:"Single Room",
price:1600,
images:[
"https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
"https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
"https://images.unsplash.com/photo-1618773928121-c32242e63f39"
]
},
{
id:4,
name:"Family Room",
price:3700,
images:[
"https://images.unsplash.com/photo-1570129477492-45c003edd2be",
"https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
"https://images.unsplash.com/photo-1600210491369-e753d80a41f3"
]
},
{
id:5,
name:"Presidential Suite",
price:9200,
images:[
"https://images.unsplash.com/photo-1590490360182-c33d57733427",
"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
"https://images.unsplash.com/photo-1615874959474-d609969a20ed"
]
}
]

return(
<div className="rooms-container">
<h1>Resort Rooms</h1>

{rooms.map(room=>(
<div className="room-section" key={room.id}>

<h2>{room.name}</h2>
<p className="room-price">₹ {room.price} / Day</p>

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