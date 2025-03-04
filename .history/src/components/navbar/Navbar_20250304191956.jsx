import "../../css/Components/navbar/navbar.css";
import { Menu, MenuItem, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const advancedCourses = [
  "Web Development",
  "AWS Cloud",
  "Artificial Intelligence",
  "Machine Learning",
  "Java Full Stack",
  "React JS",
  "Digital Marketing",
  "Node JS",
];

const beginnerCourses = ["C", "C++", "Java"];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchor, setSubMenuAnchor] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchor(null);
  };

  const handleSubMenuOpen = (event, category) => {
    setSubMenuAnchor(event.currentTarget);
    setActiveCategory(category);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentPath = location.pathname;

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
                <Link to="/" className={`nav-link ${currentPath === "/" ? "active-link text-warning" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Button
                  aria-controls="course-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                  sx={{ color: "white", textTransform: "none", fontSize: "16px" }}
                >
                  Courses
                </Button>
                <Menu
                  id="course-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{ ".MuiPaper-root": { backgroundColor: "#222", color: "#fff", borderRadius: "8px" } }}
                >
                  <MenuItem onMouseEnter={(e) => handleSubMenuOpen(e, "advanced")}>
                    Advanced Courses
                  </MenuItem>
                  <MenuItem onMouseEnter={(e) => handleSubMenuOpen(e, "beginner")}>
                    Beginner Courses
                  </MenuItem>
                </Menu>
                {subMenuAnchor && (
                  <Menu
                    anchorEl={subMenuAnchor}
                    open={Boolean(subMenuAnchor)}
                    onClose={handleMenuClose}
                    sx={{ ".MuiPaper-root": { backgroundColor: "#222", color: "#fff" } }}
                  >
                    {(activeCategory === "advanced" ? advancedCourses : beginnerCourses).map((course, index) => (
                      <Link key={index} to={`/courses/${course.replace(/\s+/g, "-").toLowerCase()}`} style={{ textDecoration: "none", color: "white" }}>
                        <MenuItem sx={{ "&:hover": { backgroundColor: "#ffcc00", color: "black" } }}>
                          {course}
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                )}
              </li>
              <li>
                <Link to="/service" className={`nav-link ${currentPath === "/service" ? "active-link text-warning" : ""}`}>
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${currentPath === "/contact" ? "active-link text-warning" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;