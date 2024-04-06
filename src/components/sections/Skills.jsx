import React from "react";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import tailwindcss from "../../assets/skills//tailwindcss.png";
import nextjs from "../../assets/skills//nextjs.png";
import ts from "../../assets/skills/ts.png";
import express from "../../assets/skills/express.svg";
import mongodb from "../../assets/skills/mongodb.svg";
import mysql from "../../assets/skills/mysql.svg";
import git from "../../assets/skills/git.svg";
import docker from "../../assets/skills/docker.svg";
import postgresql from "../../assets/skills/postgres.svg";

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
          websites with the help of HTML5 , CSS3 , Javascript , ReactJs ,
          Nextjs. I also have knowledge of backend as well specially MERN stack.
          <br />
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
            <p title="JavaScript"></p>
          </div>
          <div>
            <img src={ts} alt="TS logo" />
            <p title="TypeScript"></p>
          </div>
          <div>
            <img src={react} alt="React logo" />
            <p title="React JS"></p>
          </div>
          <div>
            <img src={nextjs} alt="Next.JS logo" />
            <p title="NEXT.js"></p>
          </div>
          <div>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png"
              alt="React Query logo"
            />
            <p title="React-Query"></p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="Redux logo"
            />
            <p title="Redux"></p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            <p title="Node.js"></p>
          </div>
          <div>
            <img src={express} alt="Exporess.js" height={50} width={40} />
            <p title="Exporess.js"></p>
          </div>
          <div>
            <img src={mongodb} alt="MongoDB" height={50} width={40} />
            <p title="MongoDB"></p>
          </div>
          <div>
            <img src={mysql} alt="MySql" height={50} width={40} />
            <p title="MySql"></p>
          </div>
          <div>
            <img src={postgresql} alt="PostgreSql" height={50} width={40} />
            <p title="PostgreSql"></p>
          </div>
          <div>
            <img src={git} alt="Git" height={50} width={40} />
            <p title="Git"></p>
          </div>
          <div>
            <img src={docker} alt="Docker" height={50} width={40} />
            <p title="Docker"></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
