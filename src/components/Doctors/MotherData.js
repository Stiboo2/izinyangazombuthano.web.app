import { useState, useEffect } from "react";

export const getMothers = async () => {
  const response = await fetch(
    "https://react-project-1-2456c-default-rtdb.asia-southeast1.firebasedatabase.app/Mother.json"
  );
  const responseData = await response.json();

  const loadedMother = [];

  for (const key in responseData) {
    loadedMother.push({
      id: key,
      name: responseData[key].name,
      image: responseData[key].image,
      title: responseData[key].branch,
      quote: responseData[key].speech,
    });
  }

  return loadedMother;
};

const MotherData = () => {
  const [couples, setMothers] = useState([]);

  useEffect(() => {
    const fetchMothers = async () => {
      const loadedMothers = await getMothers();
      setMothers(loadedMothers);
    };

    fetchMothers();
  }, []);

  return null; // The Doctors component doesn't need to return anything
};

export default MotherData;
