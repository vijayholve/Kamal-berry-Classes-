import React from 'react'

const Menubar = () => {
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

export default Menu

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