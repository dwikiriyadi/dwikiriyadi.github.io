"use client";
import "./styles/navigation_overlay.scss";
import INavigationProps from "./INavigationProps";
import { motion } from "framer-motion";

const variants = {
  expanded: { width: "100vw" },
  collapsed: { width: 0 },
};

const slideIn = {
  duration: 0.5,
  type: "tween",
  ease: "easeInOut",
};


const NavigationOverlay = ({ isExpanded }: INavigationProps) => {
  return (
    <motion.div
      className="nav_overlay"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={variants}
      transition={slideIn}
    />
  );
};

export default NavigationOverlay;
