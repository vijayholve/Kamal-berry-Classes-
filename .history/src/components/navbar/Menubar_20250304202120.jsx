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

const Menubar = () => {
      const [anchorEl, setAnchorEl] = useState(null);
    
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };
    
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
    
      const currentPath = location.pathname;
      const courseMatch = currentPath.match(/^\/courses\/([\w-]+)/);
      const currentCourse = courseMatch ? courseMatch[1].replace(/-/g, " ") : null;
    
  return (
    <>
                   <Button
                  aria-controls="category-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: currentPath.includes("/courses")
                      ? "bold"
                      : "normal",
                    borderBottom: currentPath.includes("/courses")
                      ? "3px solid #ffcc00"
                      : "none",
                    transition: "border-bottom 0.3s ease-in-out",
                  }}
                  className={currentPath.includes("/courses") ? "active-link text-warning" : ""}
                >
                  {currentCourse ? currentCourse : "Courses"}
                </Button>

                <Menu
                  id="category-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    ".MuiPaper-root": {
                      backgroundColor: "#222",
                      color: "#fff",
                      borderRadius: "8px",
                    },
                  }}
                >
                  {categories.map((category, index) => {
                    const categoryPath = `/courses/${category
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`;
                    return (
                      <Link
                        key={index}
                        to={categoryPath}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem
                          onClick={handleMenuClose}
                          sx={{
                            backgroundColor:
                              currentPath === categoryPath
                                ? "#ffcc00"
                                : "transparent",
                            color:
                              currentPath === categoryPath
                                ? "black"
                                : "white",
                            fontWeight:
                              currentPath === categoryPath
                                ? "bold"
                                : "normal",
                            transition: "0.3s",
                            "&:hover": {
                              backgroundColor: "#ffcc00",
                              color: "black",
                            },
                          }}
                        >
                          {category}
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
      
    </>
  )
}

export default Menubar

