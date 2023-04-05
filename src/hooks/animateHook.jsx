import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useAnimateHook = (val) => {
  const { ref, inView } = useInView({
    threshold: val,
    shouldUseNative: true,
    triggerOnce: true,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 90,
          duration: 1.7,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ y: 100, opacity: 0 });
    }
  }, [inView]);
  return { animation, ref };
};
