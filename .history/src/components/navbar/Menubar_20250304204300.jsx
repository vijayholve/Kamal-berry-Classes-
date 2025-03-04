// import "../../css/Components/navbar/navbar.css";
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const advancedCategories = [
  "Web Development",
  "AWS Cloud",
  "Artificial Intelligence",
  "Machine Learning",
  "Java Full Stack",
  "React JS",
  "Digital Marketing",
  "Node JS",
];

const beginnerCategories = ["C", "C++", "Java", "Python"];

const Menubar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [displayedCategories, setDisplayedCategories] = useState([]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (categoryType) => {
    setSelectedCategory(categoryType);
    setDisplayedCategories(categoryType === "Advanced" ? advancedCategories : beginnerCategories);
    handleMenuClose();
  };

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
          fontWeight: "bold",
          borderBottom: "3px solid #ffcc00",
          transition: "border-bottom 0.3s ease-in-out",
        }}
      >
        {selectedCategory ? selectedCategory : "Select Category"}
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
        <MenuItem onClick={() => handleCategorySelect("Advanced")} sx={{ color: "white" }}>
          Advanced
        </MenuItem>
        <MenuItem onClick={() => handleCategorySelect("Beginner")} sx={{ color: "white" }}>
          Beginner
        </MenuItem>
      </Menu>

      {displayedCategories.length > 0 && (
        <Menu
          id="courses-menu"
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
          {displayedCategories.map((category, index) => (
            <MenuItem key={index} sx={{ color: "white" }}>
              {category}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default Menubar;