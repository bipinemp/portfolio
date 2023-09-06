import React from "react";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import tailwindcss from "../../assets/skills//tailwindcss.png";
import nextjs from "../../assets/skills//nextjs.png";

import { motion } from "framer-motion";
import { useAnimateHook } from "../../hooks/animateHook";

function Skills() {
  const { animation, ref } = useAnimateHook(0.4);
  return (
    <motion.div ref={ref} animate={animation} id="skills" className="skills">
      <div className="skills1">
        <h1>Skills</h1>
      </div>
      <div className="skills2">
        <p>
          I possess a solid grasp of essential frontend skills that allow me to
          craft stunning and dynamic websites. <br /> <br />I have created many
          websites with the help of HTML5 , CSS3 , Javascript , ReactJs. I also
          have very Basic knowledge of MERN stack , currently I'm learning MERN
          Btw. <br />
        </p>
        <span>
          For more details just <a href="#contact">Contact</a> me.
        </span>
        <span className="techstack">Tech stack</span>

        <div className="skills2-1">
          <div>
            <img src={html} alt="HTML logo" />
            <p title="HTML5"></p>
          </div>
          <div>
            <img src={css} alt="CSS logo" />
            <p title="CSS3"></p>
          </div>
          <div>
            <img src={tailwindcss} alt="TailwindCss logo" />
            <p title="Tailwind CSS"></p>
          </div>
          <div>
            <img src={js} alt="JS logo" />
            <p title="Javascript"></p>
          </div>
          <div>
            <img src={react} alt="React logo" />
            <p title="React JS"></p>
          </div>
          <div>
            <img src={nextjs} alt="Next.JS logo" />
            <p title="NEXT.js"></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
