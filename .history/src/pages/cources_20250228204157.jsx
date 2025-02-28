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
              img="./images/course-01.jpg"
              category="Web Development"
              className="web-box"
            />
            <CourceBox img="./images/course-02.jpg" category="AWS Cloud" />
            <CourceBox
              img="./images/course-03.jpg"
              category="Artificial Intelligence"
            />
            <CourceBox
              img="./images/course-04.jpg"
              category="Machine Learning"
            />
            <CourceBox
              img="./images/course-05.jpg"
              category="Java Full Stack"
            />
            <CourceBox img="./images/course-06.jpg" category="React JS" />
            <CourceBox
              img="./images/course-02.jpg"
              category="Digital Marketing"
            />
            <CourceBox img="./images/course-01.jpg" category="Node JS" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cources;
