import "../css/contact.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(); // Ref for the form
  const [blockSubmit, setBlockSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_no: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBlockSubmit(true);
    await emailjs
      .sendForm(
        "service_c4arbvt",
        "template_aksv07w",
        formRef.current, // Use form reference
        "alwgV0SU7hrTmo0du"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log(response);
          setFormData({
            name: "",
            surname: "",
            email: "",
            phone_no: "",
            message: "",
          }); // Clear form after submission
          setBlockSubmit(false);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
          setBlockSubmit(false);
        }
      );
  };

  return (
    <div className="contact-us section" id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-us-content">
              <div className="row">
                <div className="col-lg-4">
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.5995334534346!2d73.9322978!3d18.5017903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3234a7ef3a3%3A0x12986266550a8660!2sAru%20palace!5e0!3m2!1sen!2sin!4v1740574627705!5m2!1sen!2sin"
                      width="100%"
                      height="670px"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-8">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-heading">
                          <h2>
                            <em>Contact Us</em>
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your Name..."
                            autoComplete="on"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>

                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Your E-mail..."
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            className="form-control"
                            type="text"
                            name="phone_no"
                            placeholder="Phone_no..."
                            autoComplete="on"
                            value={formData.phone_no}
                            onChange={handleChange}
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            className="form-control"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            disabled={blockSubmit}
                            id="form-submit"
                            className="main-button-icon"
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="info-item">
                          <i className="fa fa-phone"></i>
                          <h4>
                            <a
                              href="https://wa.me/917499196504?text=Hello,%20I%20would%20like%20to%20know%20more!"
                              className="site-footer-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              📞  +91 74991 96504 <br />


                            </a>
                            <a
                              href="https://wa.me/919960450884?text=Hello,%20I%20would%20like%20to%20know%20more!"
                              className="site-footer-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              📞  +91 99604 50884


                            </a>
                            <br />
                            <a
                              href="https://wa.me/91 98814 86066?text=Hello,%20I%20would%20like%20to%20know%20more!"
                              className="site-footer-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              📞  +91 98814 86066


                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-item">
                          <i className="fa fa-envelope"></i>
                          <h4>
                            <a href="mailto:kamalberry021@gmail.com">
                              📧kamalberry021@gmail.com 
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-item">
                          <i className="fa fa-map-marker"></i>
                          <h4>
                            <a href="#">KAMAL BERRY IT SERVICES PVT LTD</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* more-info end */}
                </div>
                {/* col-lg-8 end */}
              </div>
              {/* row end */}
            </div>
            {/* contact-us-content end */}
          </div>
          {/* col-lg-12 end */}
        </div>
        {/* row end */}
      </div>
      {/* container-fluid end */}
    </div>
  );
};

export default Contact;
