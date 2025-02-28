import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Item from "../components/testimonial/Item";
import "../css/testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    desg: "Cloud Engineer",
    message: "Kamal Berry Classes provided the perfect environment to master cloud computing. The hands-on projects helped me land my dream job!",
  },
  {
    id: 2,
    name: "Sneha Patil",
    desg: "Full Stack Developer",
    message: "This platform gave me real-world experience in website development. The expert guidance and projects were game-changers for my career!",
  },
  {
    id: 3,
    name: "Rohan Desai",
    desg: "Software Developer",
    message: "Learning here helped me build my skills in software design and development. The practical approach made all the difference!",
  },
  {
    id: 4,
    name: "Pooja Verma",
    desg: "UI/UX Designer",
    message: "The training helped me sharpen my UI/UX skills and develop intuitive web applications. Highly recommended for aspiring designers!",
  },
  {
    id: 5,
    name: "Aditya Kulkarni",
    desg: "DevOps Engineer",
    message: "The best place to learn cloud computing and DevOps! The hands-on labs and live projects gave me the confidence to work in the industry.",
  },
];


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <motion.section
      className="testimonials"
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="training-heading "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6>Testimonials</h6>
              <h1 className =" px-5 pt-3 pb-3">
                What Our <em>Students Say</em>
              </h1>
            </motion.div>
          </div>
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Item name={item.name} desg={item.desg} message={item.message} />
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
