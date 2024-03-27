import React from "react";
import ecommerce from "../../assets/works/ecommerce.png";
import movie from "../../assets/works/movie.png";
import blogwebsite from "../../assets/works/blogwebsite.mp4";
import chatapp from "../../assets/works/chatapp.mp4";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { useAnimateHook } from "../../hooks/animateHook";
import { motion } from "framer-motion";

function Work() {
  const { animation: animation1, ref: ref1 } = useAnimateHook(0.2);
  const { animation: animation2, ref: ref2 } = useAnimateHook(0.3);
  const { animation: animation3, ref: ref3 } = useAnimateHook(0.4);
  const { animation: animation4, ref: ref4 } = useAnimateHook(0.5);
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
              <div>
                <p>Next.JS 13</p>
                <p>React-query</p>
              </div>
              <div>
                <p>Tailwind Css</p>
              </div>
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

        <motion.div
          ref={ref3}
          animate={animation3}
          className="work2-1 first-work"
        >
          <div className="work2-1-1 work2-1-1--1">
            <video width="100%" height="100%" controls>
              <source src={blogwebsite} type="video/mp4" />
            </video>
          </div>
          <div className="work2-1-2">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Blog Website</h1>
            </div>
            <div className="work2-1-2-3">
              <p>
                This is a blog website like reddit where users can
                create/read/edit/delete posts upvote/downvote post and search
                for post.
              </p>
            </div>
            <div className="work2-1-2-4">
              <div>
                <p>Next.JS 13</p>
                <p>React-query</p>
              </div>
              <div>
                <p>Tailwind Css</p>
                <p>ShadcnUI</p>
              </div>
            </div>
            <div className="work2-1-2-5">
              <div>
                <a
                  href="https://github.com/bipinemp/blogwebsite"
                  target="_blank"
                >
                  <FiGithub className="icon1" />
                  <p title="Github"></p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          animate={animation4}
          className="work2-1 first-work"
        >
          <div className="work2-1-1 work2-1-1--1">
            <video width="100%" height="100%" controls>
              <source src={chatapp} type="video/mp4" />
            </video>
          </div>
          <div className="work2-1-2">
            <div className="work2-1-2-1">
              <p>Featured Project</p>
            </div>
            <div className="work2-1-2-2">
              <h1>Chat Application</h1>
            </div>
            <div className="work2-1-2-3">
              <p>
                This is a chat application where user can register/login with
                credentials or with google. User can search for users and
                send/accept/decline friend request. and can have 1-1 chat with
                the friends.
              </p>
            </div>
            <div className="work2-1-2-4-1">
              <div>
                <p>Next.JS 14</p>
                <p>React-query</p>
              </div>
              <div>
                <p>socket.io</p>
                <p>express</p>
              </div>
              <div>
                <p>Tailwind Css</p>
                <p>ShadcnUI</p>
              </div>
            </div>
            <div className="work2-1-2-5">
              <div>
                <a
                  href="https://github.com/bipinemp/chat_app_socket_nextjs"
                  target="_blank"
                >
                  <FiGithub className="icon1" />
                  <p title="Github"></p>
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
