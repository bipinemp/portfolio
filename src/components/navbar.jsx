import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HexagonWithLetter from "../components/HexagonWithLetter";

const Navbar = () => {
  const [ham, setHam] = useState(false);
  const [showside, setShowside] = useState(false);
  const [nav, setNav] = useState(false);

  const handleHam = () => {
    setHam(!ham);
    setShowside(!ham);
  };

  useEffect(() => {
    if (ham) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [ham]);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const handleTag = () => {
    setShowside(false);
    setHam(false);
  };

  window.addEventListener("scroll", changeNav);

  return (
    <motion.nav className={nav ? "navbar active" : "navbar"}>
      <div
        className="navbarlogo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { ease: "linear" }, delay: 1.6 }}
      >
        <a href="/">
          <HexagonWithLetter color="var(--signature)" size="50px" delay="0s" />
        </a>
      </div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          default: { ease: "linear" },
        }}
      >
        <motion.li
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, delay: 0.8 },
          }}
        >
          <a href="#about">
            <span>01.</span> About
          </a>
        </motion.li>
        <motion.li
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, delay: 1.1 },
          }}
        >
          <a href="#skills">
            <span>02.</span> Skills
          </a>
        </motion.li>
        <motion.li
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, delay: 1.4 },
          }}
        >
          <a href="#work">
            <span>03.</span> Work
          </a>
        </motion.li>
        <motion.li
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 90, delay: 1.7 },
          }}
        >
          <a href="#contact">
            <span>04.</span> Contact
          </a>
        </motion.li>
        <div class="animation start-home"></div>
      </motion.ul>
      <div onClick={handleHam} className={`hammenu ${ham ? "active" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {showside ? <div className="overlay" /> : null}

      <div className={`sidebar ${showside ? "active" : ""}`}>
        <ul className="sidebarul">
          <li>
            <span>01.</span>
            <a href="#about" onClick={handleTag}>
              About
            </a>
          </li>
          <li>
            <span>02.</span>
            <a href="#skills" onClick={handleTag}>
              Skills
            </a>
          </li>
          <li>
            <span>03.</span>
            <a href="#work" onClick={handleTag}>
              Work
            </a>
          </li>
          <li>
            <span>04.</span>
            <a href="#contact" onClick={handleTag}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
