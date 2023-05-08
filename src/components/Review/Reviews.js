import React from "react";
import Review from "./Review";
import "./Review.css";
function Reviews() {
  return (
    <main className="main_rv">
      <section className="container_rv">
        <div className="title_rv">
          <h2>our reviews</h2>
          <div className="underline_rv"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Reviews;
