import { Link } from "react-router-dom";


export function Home() {
  return (
      <>
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">StayFinder</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
           <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/bookings">Booking</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
            <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>

      <div className="hero">
        <h1>Find Your Perfect Stay</h1>
        <p>Search hotels, resorts and homestays at the best price</p>

        <div className="search-box">
          <input type="text" placeholder="Where are you going?" />
          <input type="date" />
          <input type="date" />
          <input type="number" placeholder="Guests" />
          <button>Search</button>
        </div>
      </div>
    </header>
     <footer className="footer">
        <div className="footer-container">

          <div className="footer-section">
            <h2>StayFinder</h2>
            <p>Find the best hotels and rooms at affordable prices.</p>
          </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////// */}
         <div className="footer-section">
  <h3>Quick Links</h3>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/hotels">Hotels</Link></li>
    <li><Link to="/rooms">Rooms</Link></li>
    <li><Link to="/bookings">Booking</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
   </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@stayfinder.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, India</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 StayFinder. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
