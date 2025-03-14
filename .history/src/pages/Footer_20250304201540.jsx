import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const location = useLocation(); // Get current path

  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4 pb-2">
            <Link to="/" className="navbar-brand mb-2">
              <img src="/images/Logo.png" alt="Logo" className="footer-logo" />
            </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="site-footer-title mb-3">Resources</h6>
            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <Link to="/" className={`site-footer-link ${isActive("/")}`}>
                  Home
                </Link>
              </li>
              <li className="site-footer-link-item">
                <Link
                  to="/service"
                  className={`site-footer-link ${isActive("/service")}`}
                >
                  Service
                </Link>
              </li>
              <li className="site-footer-link-item">
                <Link
                  to="/contact"
                  className={`site-footer-link ${isActive("/contact")}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
            <h6 className="site-footer-title mb-3">Information</h6>
            <a
              href="https://wa.me/917499196504?text=Hello,%20I%20would%20like%20to%20know%20more!"
              className="site-footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📞 +91 74991 96504
            </a>
            <br />
            <a
              href="https://wa.me/919960450884?text=Hello,%20I%20would%20like%20to%20know%20more!"
              className="site-footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📞 +91 99604 50884
            </a>
            <br />
            <a
              href="https://wa.me/919960450884?text=Hello,%20I%20would%20like%20to%20know%20more!"
              className="site-footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📞 +91 98814 86
            </a>

            <p className="text-white d-flex">
              <a
                href="mailto:kamalberry021@gmail.com"
                className="site-footer-link"
              >
                📧 Email: kamalberry021@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              <br />
              💻 Website Support & Development:
              <a
                className="text-opacity-100 text-warning text-bold "
                href="https://wa.me/918080028963?text=Hello%2C%20I%20need%20a%20website.%20Can%20we%20discuss%3F"
                target="_blank"
              >
                +91 8080028963
              </a>
            </p>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
