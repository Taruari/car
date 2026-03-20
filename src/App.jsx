import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Hotels } from "./Hotels";
import { Login } from "./Login";
import { Bookings } from "./Bookings";
import { Signup } from "./Signup";
import { Contact} from "./Contact";
import { Rooms} from "./Rooms";
import { RoomsSecond} from "./RoomsSecond";
import { RoomsThird } from "./RoomsThird";
import { RoomsFourth } from "./RoomsFourth";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={ <ProtectedRoute><Bookings /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/sample" element={<RoomsSecond/>} />
        <Route path="/rooms/3" element={<RoomsThird/>} />
        <Route path="/rooms/4" element={<RoomsFourth/>} />
      
      </Routes>
    </div>
  );
}

export default App;
