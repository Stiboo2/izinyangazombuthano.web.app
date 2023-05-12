import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { getMothers } from "../Doctors/MotherData";
import Loading from "../Tools/Loading";
import "./Mothers.css";
import Title from "../Events/Title";

const Mothers = () => {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const loadedMothers = await getMothers();
      setLoading(false);
      setPeople(loadedMothers);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    if (!loading) {
      let slider = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % people.length);
      }, 5000);

      return () => {
        clearInterval(slider);
      };
    }
  }, [index, loading, people.length]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <section className="sectionm" style={{ marginLeft: "-20vw" }}>
      <Title text="Our Mothers" />

      <div className="sectionm-center" style={{ marginLeft: "15%" }}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`article_m ${position}`} key={id}>
              <img src={image} alt={name} className="person_m-img" />
              <h4 className="h4_m">{name}</h4>
              <p className="title_m">{title}</p>
              <p className="text_m">{quote}</p>
              <FaQuoteRight className="icon_m" />
            </article>
          );
        })}
        <button className="prev_m" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next_m" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Mothers;
