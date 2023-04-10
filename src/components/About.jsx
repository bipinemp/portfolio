import React from "react";
import img1 from "../assets/img1.jpg";
import { motion } from "framer-motion";
import { useAnimateHook } from "../hooks/animateHook";

function About() {
  const { animation, ref } = useAnimateHook(0.4);

  return (
    <motion.div id="about" ref={ref} animate={animation} className="aboutmain">
      <div className="about1">
        <h1>About Me</h1>
      </div>
      <div className="aboutsecond">
        <div className="about">
          <div className="about2">
            <p>
              Hi👋, my name is Bipin a nd I enjoy making beautifull websites. I
              started making websites back in 2021 at the time of Lockdown bcoz
              of free time where I learn about HTML & CSS. <br /> <br /> Today,
              I've learned about various technologies of frontend web
              development. I'm always interested to work on frontend projects
              with positive people.
            </p>
          </div>
          <div className="about3">
            <p>Let's make something speical.</p>
          </div>
        </div>
        <div className="aboutimg">
          <img src={img1} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
