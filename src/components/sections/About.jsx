import React from "react";
import img1 from "../../assets/profile/img1.jpg";
import { motion } from "framer-motion";
import { useAnimateHook } from "../../hooks/animateHook";

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
              Hi👋, my name is Bipin a nd I enjoy making beautifull websites. As
              a junior Front-End Developer, I have a good skills of HTML, CSS,
              JS, ReactJS/NextJS, Tailwindcss <br /> <br /> I'm always
              interested to work on frontend projects with positive people.
            </p>
          </div>
          <div className="about3">
            <p>
              <a href="#contact">Let's make something speical.</a>
            </p>
          </div>
        </div>
        <div className="aboutimg">
          <img src={img1} alt="my_photo" />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
