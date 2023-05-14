import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaFemale,
  FaMale,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/showcouples",
    text: "Couples",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/review",
    text: "Fathers",
    icon: <FaMale />,
  },
  {
    id: 3,
    url: "/mothers",
    text: "Mothers",
    icon: <FaFemale />,
  },
  {
    id: 4,
    url: "/socials",
    text: "Socials",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/birthday",
    text: "Birthdays",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
