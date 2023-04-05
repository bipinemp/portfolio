import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Info() {
  return (
    <div className="info">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.7, delay: 3.2 }}
        className="leftinfo"
      >
        <li>
          <a href="#">
            <FiGithub fontSize="23px" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FiFacebook fontSize="23px" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FiInstagram fontSize="23px" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FiLinkedin fontSize="23px" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FiTwitter fontSize="23px" className="icon" />
          </a>
        </li>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.7, delay: 3.2 }}
        className="rightinfo"
      >
        <li>
          <a href="#">bhandaribipin3.39@gmail.com</a>
        </li>
      </motion.ul>
    </div>
  );
}

export default Info;
