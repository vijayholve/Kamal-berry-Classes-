import "../../css/Components/navbar/navbar.css";
import { Menu, MenuItem, Button, IconButton, Tabs, Tab } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const advancedCourses = [
  "Web Development", "AWS Cloud", "Artificial Intelligence", "Machine Learning", "Java Full Stack", "React JS", "Digital Marketing", "Node JS"
];

const beginnerCourses = ["C", "C++", "Java"];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleTabChange = (_, newValue) => setTabIndex(newValue);

  const currentPath = location.pathname;
  const coursesToShow = tabIndex === 0 ? advancedCourses : beginnerCourses;

  return (
    <header className="header-area header-sticky mb-5" id="header-nav">
      <div className="container">
        <nav className="main-nav navbar">
          <Link to="/" className="logo navbar-brand">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>

          <IconButton className="mobile-menu-btn" onClick={toggleMobileMenu} sx={{ color: "white" }}>
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
              <li>
                <Link to="/" className={`nav-link ${currentPath === "/" ? "active-link text-warning" : ""}`}>Home</Link>
              </li>
              <li>
                <Button onClick={handleMenuClick} sx={{ color: "white", textTransform: "none", fontSize: "16px" }}>
                  Courses
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    ".MuiPaper-root": {
                      backgroundColor: "#222",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "10px",
                      width: "250px"
                    },
                  }}
                >
                  <Tabs value={tabIndex} onChange={handleTabChange} textColor="inherit" indicatorColor="secondary">
                    <Tab label="Advanced Courses" sx={{ color: "white" }} />
                    <Tab label="Beginner Courses" sx={{ color: "white" }} />
                  </Tabs>
                  {coursesToShow.map((course, index) => (
                    <Link key={index} to={`/courses/${course.replace(/\s+/g, "-").toLowerCase()}`} style={{ textDecoration: "none", color: "white" }}>
                      <MenuItem onClick={handleMenuClose} sx={{ "&:hover": { backgroundColor: "#ffcc00", color: "black" }}}>
                        {course}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </li>
              <li>
                <Link to="/service" className={`nav-link ${currentPath === "/service" ? "active-link text-warning" : ""}`}>Service</Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${currentPath === "/contact" ? "active-link text-warning" : ""}`}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;