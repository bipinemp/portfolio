import React from "react";
import { FaMapMarked, FaEnvelopeOpenText } from "react-icons/fa";
import { useAnimateHook } from "../hooks/animateHook";
import { motion } from "framer-motion";

function Contact() {
  const { animation, ref } = useAnimateHook(0.4);
  return (
    <motion.div ref={ref} animate={animation} className="contact" id="contact">
      <div className="contact1">
        <h1>Get In Touch</h1>
      </div>
      <h1 className="shy">Don't be shy! Hit me up! 👇</h1>
      <div className="contact2">
        <div className="contact2-1">
          <div className="contact2-1-1">
            <FaMapMarked className="icon" />
          </div>
          <div className="contact2-1-2">
            <h1>Location</h1>
            <p>Gaindakot-05, Nawalparasi</p>
          </div>
        </div>
        <div className="contact2-1">
          <div className="contact2-1-1">
            <FaEnvelopeOpenText className="icon" />
          </div>
          <div className="contact2-1-2">
            <h1>Mail</h1>
            <a href="mailto:bhandaribipin3.39@gmail.com">
              bhandaribipin3.39@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
