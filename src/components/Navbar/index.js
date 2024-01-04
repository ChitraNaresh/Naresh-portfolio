import React, { useState } from "react";
import { CiSquareRemove, CiMenuFries } from "react-icons/ci";

import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="title">
        Portfoli
      </a>
      <div className="menu">
        {menuOpen ? (
          <CiSquareRemove
            onClick={() => setMenuOpen(!menuOpen)}
            className="menuBtn"
          />
        ) : (
          <CiMenuFries
            onClick={() => setMenuOpen(!menuOpen)}
            className="menuBtn"
          />
        )}
        <ul onClick={()=>setMenuOpen(false)} className={`menuItems ${menuOpen && "menuOpen"}`}>
          <li>
            <a href="#about" className="link">About</a>
          </li>
          <li>
            <a href="#projects" className="link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
