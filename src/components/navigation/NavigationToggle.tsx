"use client";
import "./styles/navigation_toggle.scss";
import { motion } from "framer-motion";
import INavigationProps from "./INavigationProps";

const variants = {
  expanded: { right: 0 },
  collapsed: { right: 0 },
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const NavigationToggle = ({
  isExpanded,
  onToggleNavigation,
}: INavigationProps) => {
  return (
    <motion.div
      data-expanded={isExpanded}
      className="nav_toggle"
      layout
      transition={spring}
      onClick={() => onToggleNavigation?.()}
    >
      <motion.a href="#home" className="nav_logo" data-expanded={isExpanded}>
        <motion.img src="./logo.svg" alt="logo"/>
      </motion.a>

      <svg
        className="nav_toggle_icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={{
            collapsed: {
              d: "M18.75 36L16.6 33.85L26.5 23.95L16.6 14.05L18.75 11.9L30.8 23.95L18.75 36Z",
            },
            expanded: {
              d: "M28.05 36L16 23.95L28.05 11.9L30.2 14.05L20.3 23.95L30.2 33.85L28.05 36Z",
            },
          }}
          animate={isExpanded ? "expanded" : "collapsed"}
          fill="white"
        />
      </svg>
    </motion.div>
  );
};

export default NavigationToggle;
