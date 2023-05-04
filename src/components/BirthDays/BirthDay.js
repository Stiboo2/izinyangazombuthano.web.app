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
    <main>
      <section className="container">
        <h3>{meals.length} birthdays today</h3>
        <List people={meals} />;
        <button onClick={clearHandleButton}>clear all</button>
      </section>
    </main>
  );
};
export default BirthDay;
