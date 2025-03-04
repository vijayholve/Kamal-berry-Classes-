import "../../css/Components/navbar/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <header className="header-area header-sticky mb-5" id="header-nav">
      <div className="container">
        <nav className="main-nav navbar">
          <Link to="/" className="logo navbar-brand">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>

          <div className="nav-links">
            <ul className="nav-menu">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className="nav-link">Courses</span>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div
                      className="dropdown-item"
                      onMouseEnter={() => setActiveCategory("advanced")}
                    >
                      Advanced Courses
                    </div>
                    <div
                      className="dropdown-item"
                      onMouseEnter={() => setActiveCategory("beginner")}
                    >
                      Beginner Courses
                    </div>
                  </div>
                )}
                {activeCategory && (
                  <div
                    className="sub-menu"
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {(activeCategory === "advanced" ? advancedCourses : beginnerCourses).map(
                      (course, index) => (
                        <Link
                          key={index}
                          to={`/courses/${course.replace(/\s+/g, "-").toLowerCase()}`}
                          className="sub-menu-item"
                        >
                          {course}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </li>
              <li>
                <Link to="/service" className="nav-link">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
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