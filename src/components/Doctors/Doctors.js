import { useState, useEffect } from "react";

export const getMeals = async () => {
  const response = await fetch(
    "https://react-project-1-2456c-default-rtdb.asia-southeast1.firebasedatabase.app/Izinyanga.json"
  );
  const responseData = await response.json();

  const loadedMeals = [];

  for (const key in responseData) {
    loadedMeals.push({
      id: key,
      name: responseData[key].Name,
      image: responseData[key].img,
      age: responseData[key].Service,
    });
  }

  return loadedMeals;
};

const Doctors = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const loadedMeals = await getMeals();
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  return null; // The Doctors component doesn't need to return anything
};

export default Doctors;
