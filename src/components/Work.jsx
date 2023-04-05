import React from "react";
import netflix from "../assets/netflix.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { useAnimateHook } from "../hooks/animateHook";
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
            <img src={netflix} alt="" />
          </div>
          <div className="work2-1-2">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Netflix Clone</h1>
            </div>
            <div className="work2-1-2-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis rerum ut corporis id tempora neque? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veniam, illo! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                quos.
              </p>
            </div>
            <div className="work2-1-2-4">
              <p>React</p>
              <p>Vanilla CSS</p>
            </div>
            <div className="work2-1-2-5">
              <div>
                <FiGithub className="icon1" />
                <span title="Github"></span>
              </div>
              <div>
                <RiExternalLinkLine className="icon2" />
                <span title="Live Demo"></span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          animate={animation2}
          className="work2-1 first-work"
        >
          <div className="work2-1-1 work2-1-1-1">
            <img src={netflix} alt="" />
          </div>
          <div className="work2-1-2 work2-1-2-1-1">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Netflix Clone</h1>
            </div>
            <div className="work2-1-2-3 work2-1-2-3-1">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis rerum ut corporis id tempora neque? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veniam, illo! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                quos.
              </p>
            </div>
            <div className="work2-1-2-4-1">
              <span>React</span>
              <span>Vanilla CSS</span>
            </div>
            <div className="work2-1-2-5">
              <div>
                <FiGithub className="icon1" />
                <span title="Github"></span>
              </div>
              <div>
                <RiExternalLinkLine className="icon2" />
                <span title="Live Demo"></span>
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
            <img src={netflix} alt="" />
          </div>
          <div className="work2-1-2">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Netflix Clone</h1>
            </div>
            <div className="work2-1-2-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis rerum ut corporis id tempora neque? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veniam, illo! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                quos.
              </p>
            </div>
            <div className="work2-1-2-4">
              <p>React</p>
              <p>Vanilla CSS</p>
            </div>
            <div className="work2-1-2-5">
              <div>
                <FiGithub className="icon1" />
                <span title="Github"></span>
              </div>
              <div>
                <RiExternalLinkLine className="icon2" />
                <span title="Live Demo"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
