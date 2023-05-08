import React, { useState, useEffect } from "react";
import "./BirthDay.css";
import { getMeals } from "../Doctors/Doctors";
import List from "./List";

const BirthDay = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const loadedMeals = await getMeals();
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const clearHandleButton = () => {
    setMeals([]);
  };
  return (
    <main className="main_bd">
      <section className="container_bd">
        <div className="title_rv">
          <h2>BirthDay List</h2>
          <div className="underline_rv"></div>
        </div>
        <h3>{meals.length} birthdays today</h3>
        <List people={meals} />;
        <button className="button_bd" onClick={clearHandleButton}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default BirthDay;
