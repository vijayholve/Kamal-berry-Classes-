import React from "react";
import CourceBox from "../components/cource";
import "../css/course.css";

const Cources = () => {
  return (
    <>
      <section className="section courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center pb-5 pt-3">
              <div className="training-heading pt-5 ">
                <h6>We Provide</h6>
                <h1>
                Training And <em>Courses</em>
                </h1>
              </div>
            </div>
          </div>

          <div className="row event-box">
            <CourceBox
              img="/images/1.png"
              category="Web Development"
              className="web-box"
            />
            <CourceBox img="/images/2.png" category="AWS Cloud" />
            <CourceBox
              img="/images/.png"
              category="Artificial Intelligence"
            />
            <CourceBox
              img="/images/4.png"
              category="Machine Learning"
            />
            <CourceBox
              img="/images/5.png"
              category="Java Full Stack"
            />
            <CourceBox img="/images/6.png" category="React JS" />
            <CourceBox
              img="/images/2.png"
              category="Digital Marketing"
            />
            <CourceBox img="/images/1.png" category="Node JS" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cources;
