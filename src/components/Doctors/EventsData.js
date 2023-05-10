import { useState, useEffect } from "react";

export const getEvents = async () => {
  const response = await fetch(
    "https://react-project-1-2456c-default-rtdb.asia-southeast1.firebasedatabase.app/Event.json"
  );
  const responseData = await response.json();

  const loadedEvents = [];

  for (const key in responseData) {
    loadedEvents.push({
      id: key,
      category: responseData[key].branch,
      date: responseData[key].date,
      desc: responseData[key].disc,
      image: responseData[key].image,
      title: responseData[key].place,
    });
  }

  return loadedEvents;
};

const Events = () => {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const loadedEvents = await getEvents();
      setEvents(loadedEvents);
    };

    fetchEvents();
  }, []);

  return null; // The Doctors component doesn't need to return anything
};

export default Events;
