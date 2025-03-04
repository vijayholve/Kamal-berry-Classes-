import Cources from './cources'
import Testimonials from './Testimonials'
import Contact from './Contact'
import TabComponent from '../components/topic/Topic'
import '../css/home.css'
import Services from './Service'
const Home = () => {
  return (
    <>
   <div className="main-banner wow fadeIn page-transition" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
              <div className="row">
                <div className="col-lg-12">
                  <h6>Kamal Berry IT Services</h6>
                  <h2>Boost Your Career with Expert Guidance</h2>
                  <p>Join <strong>Kamal Berry IT Services</strong> to master in-demand skills with expert mentorship and hands-on training. Whether you prefer <strong>online or offline learning</strong>, we provide a flexible environment to suit your needs.</p>
                  <p><strong >✅ 100% Intern Placement  Guarantee!</strong> We ensure every student gets job-ready with real-world projects, industry exposure, and career support.</p>
                </div>
                <div className="col-lg-12">
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              {/* <img src="\images\Untitled design.png" alt="Kamal Berry Classes"/> */}
              <img src="\images\Intro.png" alt="Kamal Berry Classes"/>
              {/* <img src="\images\home-3.png" alt="Kamal Berry Classes"/> */}
              {/* <img src="\images\home-4.png" width="200px" alt="Kamal Berry Classes"/> */}

            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Services />
      <Cources />
      <Testimonials/>
          </>
  )
}

export default Home
