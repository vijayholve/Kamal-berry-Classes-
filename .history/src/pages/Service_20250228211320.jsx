import "../css/service.css";
import { motion } from "framer-motion";
import categories from "./data/ServiceData"; 

const Services = () => {
 
  
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
                  <div key={index} className="col-lg-2 col-sm-6 d-flex flex-column align-items-center pb-3">
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
