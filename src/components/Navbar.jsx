import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";
import XMark from "../assets/x-mark.svg";
import Hamburger from "../assets/HamburgerMenu.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Careers",
      link: "/careers",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Security",
      link: "/security",
    },
    {
      title: "SignUp",
      link: "/signup",
    },
    {
      title: "LogIn",
      link: "/login",
    },
  ];
  const handleLinkClick = (i) => {
    setShowNavbar((prev) => !prev);
    setCurrentPage(i);
  };

  return (
    <nav className="navbar">
      <div className="nav_container border-radius-8">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={showNavbar ? XMark : Hamburger} alt="" width={35} />
        </div>
        <div
          className={`nav-elements border-radius-1  ${showNavbar && "active"} `}
        >
          <ul>
            {navItems.map((item, index) => (
              <li
                className={` ${currentPage === index ? "active" : null}`}
                key={index}
              >
                <Link onClick={() => handleLinkClick(index)} to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
