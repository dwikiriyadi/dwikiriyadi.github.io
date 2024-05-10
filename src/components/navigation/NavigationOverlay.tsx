"use client";
import "./styles/navigation_overlay.scss";
import INavigationProps from "./INavigationProps";
import { motion } from "framer-motion";

const variants = {
  expanded: { opacity: "90%" },
  collapsed: { opacity: 0 },
};

const NavigationOverlay = ({ isExpanded }: INavigationProps) => {
  return (
    <motion.div
      className="nav_overlay"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={variants}
    />
  );
};

export default NavigationOverlay;
