import React from "react";
import { Link } from "react-router-dom";

const CourceBox = ({ img, category, className }) => {
  const formattedCategory = category.trim().toLowerCase().replace(/\s+/g, "-"); // Ensure correct formatting

  return (
    <div
      className={`course-box ${className} col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design`}
    >
      <Link to={`/courses/${formattedCategory}`}>
        <div className="events_item">
          <div className="thumb">
            <img src={img} alt={category} />
            <span className="category">{category.trim()}</span>
          </div>
          <div className="down-content">
            <h4>Learn {category.trim()}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourceBox;
