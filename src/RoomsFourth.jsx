import "./index.css";

export function RoomsFourth() {
  const rooms = [
    {
      id: 1,
      name: "Mountain View Suite",
      price: 4800,
      images: [
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
        "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f",
      ],
    },
    {
      id: 2,
      name: "Luxury Deluxe Room",
      price: 4100,
      images: [
        "https://images.unsplash.com/photo-1592229505726-ca121723b8ef",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      ],
    },
    {
      id: 3,
      name: "Single Room",
      price: 1700,
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      ],
    },
    {
      id: 4,
      name: "Family Room",
      price: 3900,
      images: [
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
        "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
      ],
    },
    {
      id: 5,
      name: "Presidential Suite",
      price: 10000,
      images: [
        "https://images.unsplash.com/photo-1617806118233-18e1de247200",
        "https://images.unsplash.com/photo-1618220179428-22790b461013",
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
      ],
    },
  ];

  return (
    <div className="rooms-container">
      <h1>Premium Hotel Rooms</h1>

      {rooms.map((room) => (
        <div className="room-section" key={room.id}>
          <h2>{room.name}</h2>
          <p className="room-price">₹ {room.price} / Day</p>

          <div className="room-images">
            {room.images.map((img, i) => (
              <img key={i} src={img} alt={room.name} />
            ))}
          </div>

          <button className="book-btn">Book Now</button>
        </div>
      ))}
    </div>
  );
}
