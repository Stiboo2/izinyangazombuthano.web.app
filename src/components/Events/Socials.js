import React, { useState, useEffect } from "react";
import Title from "./Title";
import "./Socials.css";
import Loading from "../Tools/Loading";
import Event from "./Event";
import { getEvents } from "../Doctors/EventsData";
const Socials = () => {
  const [eventItems, setEventItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const loadedEvents = await getEvents();
      setLoading(false);
      setEventItems(loadedEvents);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <section className="menu_sc">
        <Title text="Our Social Event" />
        <Event items={eventItems} />
      </section>
    </main>
  );
};
export default Socials;
