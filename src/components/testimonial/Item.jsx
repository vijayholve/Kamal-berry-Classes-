import React from "react";

const Item = ({ message, name, desg }) => {
  return (
    <div className="testimonial-item">
      <p> "{message}"</p>
      <h4>{name}</h4>
      <span>{desg}</span>
    </div>
  );
};

export default Item;
