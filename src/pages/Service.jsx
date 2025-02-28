import React from "react";
import { FaCloud, FaCode, FaDatabase, FaPalette, FaLock, FaRobot } from "react-icons/fa";
import "../css/service.css";
import { motion } from "framer-motion";

const Services = () => {
  const categories = [
    { icon: <FaCloud size={40} />, title: "Cloud Computing" },
    { icon: <FaCode size={40} />, title: "Web Development" },
    { icon: <FaDatabase size={40} />, title: "Data Science" },
    { icon: <FaPalette size={40} />, title: "UI/UX Design" },
    { icon: <FaLock size={40} />, title: "Cybersecurity" },
    { icon: <FaRobot size={40} />, title: "AI & Machine Learning" },
  ];

  const collections = [
    { title: "AWS Cloud Mastery", items: "150/180", category: "Cloud Computing" },
    { title: "Full Stack Web Development", items: "200/210", category: "Web Development" },
    { title: "AI & ML Course", items: "180/200", category: "AI & Machine Learning" },
    { title: "UI/UX Bootcamp", items: "250/275", category: "UI/UX Design" },
  ];

  return (
    <div className="categories-collections">
      <div className="container">
        <div className="row">
          {/* Testimonial Section */}
          <div className="col-lg-12">
            <motion.div
              className="training-heading text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6></h6>
              <h1>
                 Our <em>Services</em>
              </h1>
            </motion.div>
          </div>

          {/* Categories Section */}
          <div className="col-lg-12">
            <div className="categories">
              <div className="row">
                <div className="col-lg-12 pb-5">
           
                </div>
                {categories.map((category, index) => (
                  <div key={index} className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon">{category.icon}</div>
                      <h4>{category.title}</h4>
                      <div className="icon-button">
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default Services;
