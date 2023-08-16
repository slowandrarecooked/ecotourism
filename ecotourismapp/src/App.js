import "./App.css";
import Navbar from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./Components/Footer";
import { Link, Navigate } from "react-router-dom";
import Footer1 from "./Components/Footer1";
import { useContext } from "react";
import { AuthContext } from "./Routes/PrivateRoute";
function App() {
  return (
    <div className="App">
     
      <AllRoutes />
      
    </div>
  );
}

export default App;
