import React from "react";
import { NavLink } from "react-router-dom";

import log2 from "./log2.jpg";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import "./Navbar.css";
import classes from "../MainNavigation.module.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={log2} className="logo" alt="addict" />

        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <NavLink to={url} end>
                {icon}
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
