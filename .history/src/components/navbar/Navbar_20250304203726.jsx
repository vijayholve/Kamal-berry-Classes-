import "../../css/Components/navbar/navbar.css";
import { Menu, MenuItem, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menubar from "./Menubar";

const categories = [
  "Web Development",
  "AWS Cloud",
  "Artificial Intelligence",
  "Machine Learning",
  "Java Full Stack",
  "React JS",
  "Digital Marketing",
  "Node JS",
];


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentPath = location.pathname;
  const courseMatch = currentPath.match(/^\/courses\/([\w-]+)/);

  return (
    <header className="header-area header-sticky mb-5" id="header-nav">
      <div className="container">
        <nav className="main-nav navbar">
          {/* Logo */}
          <Link to="/" className="logo navbar-brand">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>

          {/* Mobile Hamburger */}
          <IconButton
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            sx={{ color: "white" }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
            <li>
                <Link
                  to="/"
                  className={`nav-link ${currentPath === "/" ? "active-link text-warning" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Menubar/>
 
              </li>
              <li>
                <Link
                  to="/service"
                  className={`nav-link ${currentPath === "/service" ? "active-link text-warning" : ""}`}
                >
                  Service
                </Link>
              </li>
              
            
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${currentPath === "/contact" ? "active-link text-warning" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          /* Desktop styles remain unchanged */
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }
          .nav-links {
            display: flex;
            align-items: center;
          }
          .nav-menu {
            list-style: none;
            display: flex;
            gap: 20px;
          }
          .mobile-menu-btn {
            display: none;
          }
          
          /* Mobile Responsive */
          @media (max-width: 768px) {
            .nav-links {
              position: fixed;
              top: 80px; /* below the fixed header */
              left: 0;
              width: 100%;
              background: #222;
              flex-direction: column;
              padding: 20px 0;
              z-index: 1100; /* higher than other content */
              display: none;
            }
            .nav-links.open {
              display: flex;
            }
            .nav-menu {
              flex-direction: column;
              gap: 10px;
              text-align: center;
            }
            .mobile-menu-btn {
              display: block;
            }
          }
          
          /* Active Link Styling */
          .nav-link {
            color: white;
            text-decoration: none;
            font-size: 16px;
            padding: 8px 15px;
            transition: all 0.3s ease-in-out;
            position: relative;
          }
          .nav-link:hover {
            color: #ffcc00;
          }
          .active-link {
            color: #ffcc00;
            font-weight: bold;
            border-bottom: 3px solid #ffcc00;
            transition: border-bottom 0.3s ease-in-out;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
