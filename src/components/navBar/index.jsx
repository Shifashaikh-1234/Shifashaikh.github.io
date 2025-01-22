import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
 
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  }
  return (
    <div className="header">
      <link to="/">
      <h1>Shifa Tazeen</h1>
      </link>
      <ul className={toggleIcon ? "nav-menu active" : "nav-menu"}>
      {data.map((item, key) => (
            <li key={key}>
              <Link to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    <div className="hamburger" onClick={handleToggleIcon}>
      {toggleIcon? <FaBars size={24}/> : <HiX size={24}/> }
      

    </div>
    </div>

  );
};

export default Navbar;

