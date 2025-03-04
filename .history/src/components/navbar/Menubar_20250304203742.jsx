// import "../../css/Components/navbar/navbar.css";
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const currentPath = location.pathname;
  const courseMatch = currentPath.match(/^\/courses\/([\w-]+)/);
  const currentCourse = courseMatch
    ? courseMatch[1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : null;

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
          fontWeight: currentPath.includes("/courses") ? "bold" : "normal",
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
        <MenuItem onClick={handleMenuClose} sx={{ color: "white" }}>Advanced</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: "white" }}>Beginner</MenuItem>
      </Menu>
    </>
  );
};

export default Menubar;
