import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <img src="https://i.ibb.co/kJTF94R/logo.png" alt="logo" border="0" />
      </h3>
      <nav ref={navRef}>
        <Link to="/" className=".Link">
          Home
        </Link>
        <Link to="/" className=".Link">
          Destination
        </Link>
        <Link to="/" className=".Link">
          Activites
        </Link>
        <Link to="/" className=".Link">
          Packages
        </Link>
        <Link to="/" className=".Link">
          About
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="book-btn">Book Now</button>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
