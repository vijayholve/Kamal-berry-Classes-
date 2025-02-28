import "../css/service.css";
import { motion } from "framer-motion";

const categories = [
  { 
    icon: <FaCloud size={40} />, 
    title: "Cloud Computing",
    about: "Cloud computing allows businesses and individuals to access computing resources over the internet without needing to manage physical infrastructure. This includes services like virtual machines, storage, databases, and networking. Popular cloud platforms include AWS, Google Cloud, and Microsoft Azure."
  },
  { 
    icon: <FaCode size={40} />, 
    title: "Web Development",
    about: "Web development involves creating websites and web applications using technologies such as HTML, CSS, JavaScript, and modern frameworks like React.js and Node.js. It includes frontend development (UI/UX design), backend development (databases and APIs), and full-stack development."
  },
  { 
    icon: <FaDatabase size={40} />, 
    title: "Data Science",
    about: "Data science involves extracting insights from structured and unstructured data using statistics, programming, and machine learning. It includes techniques like data visualization, predictive modeling, and big data analytics using Python, R, and SQL."
  },
  { 
    icon: <FaPalette size={40} />, 
    title: "UI/UX Design",
    about: "UI/UX design focuses on enhancing user experience and interface design for websites and applications. It includes wireframing, prototyping, usability testing, and working with tools like Figma, Adobe XD, and Sketch."
  },
  { 
    icon: <FaLock size={40} />, 
    title: "Cybersecurity",
    about: "Cybersecurity involves protecting systems, networks, and data from cyber threats. It includes ethical hacking, penetration testing, network security, and security frameworks like ISO 27001 and NIST."
  },
  { 
    icon: <FaRobot size={40} />, 
    title: "AI & Machine Learning",
    about: "AI & Machine Learning focus on building intelligent systems that can learn and make decisions without human intervention. This includes deep learning, natural language processing, and neural networks using frameworks like TensorFlow and PyTorch."
  }
];
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
