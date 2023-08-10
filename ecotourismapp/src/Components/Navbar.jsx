import { Link } from "react-router-dom";
export const Navbar = () => {
  const Links = [
    { path: "/", title: "Home" },
    { path: "/Destinations", title: "Destinations" },
    { path: "/AboutUs", title: "About us" },
  ];
  return (
    <div
      className="Navbar"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        backgroundColor: "#7DBBA9",
      }}
    >
      <div className="logo">
        <img src="https://i.ibb.co/kJTF94R/logo.png" alt="" />
      </div>
      <div
        className="links"
        style={{
          display: "flex",
          gap: "60px",
          margin: "auto",
          fontSize: "20px",
        }}
      >
        {Links.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            style={{ textDecoration: "none", color: "white" }}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div
        className="book"
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            border: "none",
            borderRadius: "20px",
            height: "50px",
            backgroundColor: "yellow",
            padding: "0px 20px 0px 20px",
            backgroundColor: "#FACE55",
            fontWeight: "bold",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
