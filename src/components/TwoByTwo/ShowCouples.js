import React, { useState, useEffect } from "react";
import Loading from "../Tools/Loading";
import Couples from "./Couples";
import { getCouples } from "../Doctors/CoupleData";
import "./TwoByTwo.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const ShowCouples = () => {
  const [loading, setLoading] = useState(true);

  const [couples, setCouples] = useState([]);

  const removeCouple = (id) => {
    const newCouples = couples.filter((couple) => couple.id !== id);
    setCouples(newCouples);
  };

  const fetchCouples = async () => {
    setLoading(true);
    try {
      const loadedCouples = await getCouples();
      setLoading(false);
      setCouples(loadedCouples);
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

  const HandlerFetchCouples = () => {};
  if (couples.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no Couples left</h2>
          <button className="btn" onClick={HandlerFetchCouples}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Couples couples={couples} removeCouple={removeCouple} />
    </main>
  );
};
export default ShowCouples;
