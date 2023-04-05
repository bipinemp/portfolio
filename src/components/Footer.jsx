import React from "react";
import { motion } from "framer-motion";
import { useAnimateHook } from "../hooks/animateHook";

function Footer() {
  const { ref, animation } = useAnimateHook(0.1);
  return (
    <motion.div ref={ref} animate={animation} className="footer">
      <p>&copy; Designed & Built by Bipin Bhandari 2023</p>
    </motion.div>
  );
}

export default Footer;
