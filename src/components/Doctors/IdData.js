import { useState, useEffect } from "react";

export const getIdPhoto = async () => {
  const response = await fetch(
    "https://react-project-1-2456c-default-rtdb.asia-southeast1.firebasedatabase.app/ID_Photo.json"
  );
  const responseData = await response.json();
  console.log(responseData);
  const loadedIdPhotos = [];

  for (const key in responseData) {
    loadedIdPhotos.push({
      id: key,
      name: responseData[key].name,
      image: responseData[key].image,
      text: responseData[key].text,
      title: responseData[key].title,
    });
  }

  return loadedIdPhotos;
};

const IdPhotoData = () => {
  const [IdPhoto, setIdPhoto] = useState([]);

  useEffect(() => {
    const fetchIdPhoto = async () => {
      const loadedIdPhotos = await getIdPhoto();
      setIdPhoto(loadedIdPhotos);
    };

    fetchIdPhoto();
  }, []);

  return null; // The Doctors component doesn't need to return anything
};

export default IdPhotoData;
