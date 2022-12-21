import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Calender, Home, Profile } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
