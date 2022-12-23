import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Calender, Home, Login, Profile, Signup } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
