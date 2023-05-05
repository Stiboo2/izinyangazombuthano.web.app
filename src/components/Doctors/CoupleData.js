import { useState, useEffect } from "react";

export const getCouples = async () => {
  const response = await fetch(
    "https://react-project-1-2456c-default-rtdb.asia-southeast1.firebasedatabase.app/Couples.json"
  );
  const responseData = await response.json();

  const loadedCouples = [];

  for (const key in responseData) {
    loadedCouples.push({
      id: key,
      name: responseData[key].Surname,
      image: responseData[key].image,
      info: responseData[key].Info,
      price: responseData[key].years,
    });
  }

  return loadedCouples;
};

const CoupleData = () => {
  const [couples, setCouples] = useState([]);

  useEffect(() => {
    const fetchCouples = async () => {
      const loadedCouples = await getCouples();
      setCouples(loadedCouples);
    };

    fetchCouples();
  }, []);

  return null; // The Doctors component doesn't need to return anything
};

export default CoupleData;
