import "../../css/Components/navbar/navbar.css";
import { Menu, MenuItem, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const [courseType, setCourseType] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setCourseType(type);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCourseType(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentPath = location.pathname;
  const courseMatch = currentPath.match(/^\/courses\/([\w-]+)/);
  const currentCourse = courseMatch
    ? courseMatch[1].replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())
    : null;

  const getCourses = () => {
    if (courseType === "advanced") return advancedCourses;
    if (courseType === "beginner") return beginnerCourses;
    return [];
  };

  return (
    <header className="header-area header-sticky mb-5" id="header-nav">
      <div className="container">
        <nav className="main-nav navbar">
          <Link to="/" className="logo navbar-brand">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
          <IconButton
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            sx={{ color: "white" }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-menu">
              <li>
                <Link to="/" className={`nav-link ${currentPath === "/" ? "active-link text-warning" : ""}`}>Home</Link>
              </li>
              <li>
                <Button
                  aria-controls="category-menu"
                  aria-haspopup="true"
                  onMouseEnter={(e) => handleMenuClick(e, "advanced")}
                  sx={{ color: "white", textTransform: "none" }}
                >
                  Advanced Courses
                </Button>
                <Button
                  aria-controls="category-menu"
                  aria-haspopup="true"
                  onMouseEnter={(e) => handleMenuClick(e, "beginner")}
                  sx={{ color: "white", textTransform: "none" }}
                >
                  Beginner Courses
                </Button>
                <Menu
                  id="category-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{ ".MuiPaper-root": { backgroundColor: "#222", color: "#fff", borderRadius: "8px" } }}
                >
                  {getCourses().map((course, index) => {
                    const coursePath = `/courses/${course.replace(/\s+/g, "-").toLowerCase()}`;
                    return (
                      <Link key={index} to={coursePath} style={{ textDecoration: "none", color: "white" }}>
                        <MenuItem
                          onClick={handleMenuClose}
                          sx={{
                            backgroundColor: currentPath === coursePath ? "#ffcc00" : "transparent",
                            color: currentPath === coursePath ? "black" : "white",
                            fontWeight: currentPath === coursePath ? "bold" : "normal",
                            transition: "0.3s",
                            "&:hover": { backgroundColor: "#ffcc00", color: "black" },
                          }}
                        >
                          {course}
                        </MenuItem>
                      </Link>
                    );
                  })}
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
