import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Navbar/context";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Navbar/Sidebar";
import "./Navbar/Navbar.css";

const Home = () => {
  const { openSidebar } = useGlobalContext();
  console.log(openSidebar);
  return (
    <>
      <div className="home-container">
        <div className="containera">
          {"\n"}
          {"\n"}
          Ikhaya le ZiNyanga
        </div>

        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <Sidebar />
        <img
          className="fullscreen-image"
          src="https://res.cloudinary.com/dkayrcyeb/image/upload/v1683576875/WhatsApp_Image_2023-05-08_at_18.50.38_9_mwfwht.jpg"
          alt="Home Image"
        />
      </div>
    </>
  );
};

export default Home;
