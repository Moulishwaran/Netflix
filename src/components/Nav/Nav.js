import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (Window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <div className="nav-contents">
        <Link to="/">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt=""
            className="nav-logo"
          />
        </Link>
        <Link to="/profile">
          <img
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt=""
            className="nav-avatar"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
