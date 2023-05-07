import React, { useState } from "react";
import "./TwoByTwo.css";
import { Link } from "react-router-dom";

const Couple = ({ id, image, info, name, price, removeCouple }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">Anniversary: {price} years</h4>
          </div>

          <p>
            {readMore ? info : info ? `${info.substring(0, 200)}...` : ""}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </p>

          <button className="delete-btn" onClick={() => removeCouple(id)}>
            I'm Done
          </button>
        </footer>
      </article>
    </>
  );
};

export default Couple;
