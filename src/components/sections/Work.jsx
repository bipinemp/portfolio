import React from "react";
import ecommerce from "../../assets/works/ecommerce.png";
import tesla from "../../assets/works/tesla.png";
import movie from "../../assets/works/movie.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { useAnimateHook } from "../../hooks/animateHook";
import { motion } from "framer-motion";

function Work() {
  const { animation: animation1, ref: ref1 } = useAnimateHook(0.2);
  const { animation: animation2, ref: ref2 } = useAnimateHook(0.3);
  const { animation: animation3, ref: ref3 } = useAnimateHook(0.4);
  return (
    <div className="work" id="work">
      <div className="work1">
        <h1>Some Things I've Built</h1>
      </div>
      <div className="work2">
        <motion.div
          ref={ref1}
          animate={animation1}
          className="work2-1 first-work"
        >
          <div className="work2-1-1">
            <img src={ecommerce} alt="ecommerce website" loading="lazy" />
          </div>
          <div className="work2-1-2">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Ecommerce</h1>
            </div>
            <div className="work2-1-2-3">
              <p>
                My Frontend specific ecommerce website built with React allows
                users to easily view, filter, and search products. They can also
                view specific products, adjust quantities, add items to their
                cart, and checkout seamlessly.
              </p>
            </div>
            <div className="work2-1-2-4">
              <p>React</p>
              <p>context</p>
              <p>reducer</p>
              <p>CSS</p>
            </div>
            <div className="work2-1-2-5">
              <div>
                <a href="https://github.com/bipinemp/Ecommerce" target="_blank">
                  <FiGithub className="icon1" />
                  <p title="Github"></p>
                </a>
              </div>
              <div>
                <a
                  href="https://bipinbhandariecommerce.netlify.app/"
                  target="_blank"
                >
                  <RiExternalLinkLine className="icon2" />
                  <p title="Live Demo"></p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          animate={animation2}
          className="work2-1 second-work"
        >
          <div className="work2-1-1 work2-1-1-1">
            <img src={tesla} alt="tesla website" loading="lazy" />
          </div>
          <div className="work2-1-2 work2-1-2-1-1">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Tesla Clone</h1>
            </div>
            <div className="work2-1-2-3 work2-1-2-3-1">
              <p>
                My Tesla website clone accurately replicates the official front
                page of the official website.
              </p>
            </div>
            <div className="work2-1-2-4-1">
              <span>React</span>
              <span>CSS</span>
            </div>
            <div className="work2-1-2-5">
              <div>
                <a
                  href="https://github.com/bipinemp/Tesla_clone"
                  target="_blank"
                >
                  <FiGithub className="icon1" />
                  <p title="Github"></p>
                </a>
              </div>
              <div>
                <a href="https://reacttesla.netlify.app/" target="_blank">
                  <RiExternalLinkLine className="icon2" />
                  <p title="Live Demo"></p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          animate={animation3}
          className="work2-1 first-work"
        >
          <div className="work2-1-1">
            <img src={movie} alt="movies website" loading="lazy" />
          </div>
          <div className="work2-1-2">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Movies Website</h1>
            </div>
            <div className="work2-1-2-3">
              <p>
                This website consits of displaying movies and TV shows based on
                (Trending,Popular etc.), It contains advanced filter and search
                Functionality.
              </p>
            </div>
            <div className="work2-1-2-4">
              <p>Next.JS 13</p>
              <p>React-query</p>
              <p>Tailwind Css</p>
            </div>
            <div className="work2-1-2-5">
              <div>
                <a href="https://github.com/bipinemp/moviesapp" target="_blank">
                  <FiGithub className="icon1" />
                  <p title="Github"></p>
                </a>
              </div>
              <div>
                <a href="https://flimbuzz.vercel.app/" target="_blank">
                  <RiExternalLinkLine className="icon2" />
                  <p title="Live Demo"></p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
