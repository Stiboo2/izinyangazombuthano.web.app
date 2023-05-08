import React, { useState, useEffect } from "react";
import { getIdPhoto } from "../Doctors/IdData";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Loading from "../Tools/Loading";

const Review = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeoples] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchCouples = async () => {
    setLoading(true);
    try {
      const loadedCouples = await getIdPhoto();
      setLoading(false);
      setPeoples(loadedCouples);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCouples();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  console.log(people);

  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random_btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
