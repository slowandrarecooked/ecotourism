import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContextProvider";
function Navbar() {
  const navRef = useRef();
  const { auth, login, logout } = useContext(AuthContext);
  const navigate = useNavigate()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  const handleLogin = ()=>{
    if(!auth){
      navigate('/signin');
    }
    logout()
  }
  return (
    <header>
      <h3>
        <img src="https://i.ibb.co/kJTF94R/logo.png" alt="logo" border="0" />
      </h3>
      <nav ref={navRef}>
        <Link to="/" className=".Link">
          Home
        </Link>
        <Link to="/destination" className=".Link">
          Destination
        </Link>
        <Link to="/destination" className=".Link">
          Activites
        </Link>
        <Link to="/destination" className=".Link">
          Packages
        </Link>
        <Link to="/destination" className=".Link">
          About
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="book-btn" onClick={handleLogin}>
        {auth ? "Logout" : "Login"}
      </button>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
