import "../css/contact.css";

const Contact = () => {
  return (
    <>
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
                    <form id="contact-form" action="" method="post">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-heading">
                            <h2>
                              <em>Contact Us</em>{" "}
                            </h2>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Your Name..."
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="surname"
                              name="surname"
                              id="surname"
                              placeholder="Your Surname..."
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="Your E-mail..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="subject"
                              name="subject"
                              id="subject"
                              placeholder="Subject..."
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Your Message"
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
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
                              📞 Phone: +91 74991 96504
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-envelope"></i>
                            <h4>
                              <a href="">📧 Email: kamalberry021@gmail.com  </a>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-map-marker"></i>
                            <h4>
                              <a href="">KAMAL BERRY IT SERVICES PVT LTD</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
