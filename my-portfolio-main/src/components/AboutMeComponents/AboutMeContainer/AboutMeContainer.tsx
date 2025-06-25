import React from "react";
import style from "./AboutMeContainer.module.scss";
import { AnimatePresence, motion } from "motion/react";

interface AboutMeContainerProps {
  heading: string;
  children: React.ReactNode;
}

const AboutMeContainer = (props: AboutMeContainerProps) => {
  const { heading, children } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={style["content-div"]}
      >
        <h2 className={style["about-me-header"]}>{heading}</h2>
        <div className={style["about-me-content"]}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutMeContainer;
