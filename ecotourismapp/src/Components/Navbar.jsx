import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

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
        <a href="/#">Home</a>
        <a href="/#">Destinations</a>
        <a href="/#">Activites</a>
        <a href="/#">Packages</a>
        <a href="/#">About</a>
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
