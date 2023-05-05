import React from "react";
import Couple from "./Couple";
import "./TwoByTwo.css";
const Couples = ({ couples, removeCouple }) => {
  return (
    <section>
      <div className="title">
        <h2>our couple</h2>
        <div className="underline"></div>
      </div>
      <div>
        {couples.map((couple) => {
          return (
            <Couple key={couple.id} {...couple} removeCouple={removeCouple} />
          );
        })}
      </div>
    </section>
  );
};
export default Couples;
