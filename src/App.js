import React, { useState, useEffect } from "react";

import List from "./List";

import { getMeals } from "./Doctors";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const loadedMeals = await getMeals();
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const clearHandleButton = () => {
    console.log("inside");
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
}

export default App;
