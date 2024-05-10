"use client";
import "./appbar.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IAppBarProps = {
  isNavExpanded: boolean;
  onNavToggleClick: () => void;
};

const variant = {
  expanded: {
    right: "5.375rem",
    color: "#FFFFFF",
  },
  collapsed: {
    right: "1.375rem",
    color: "#212121",
  },
};

const AppBar = ({ isNavExpanded, onNavToggleClick }: IAppBarProps) => {
  return (
    <header className="appbar">
      <motion.a
        href="#home"
        className="appbar_alias"
        variants={variant}
        animate={isNavExpanded ? "expanded" : "collapsed"}
      >
        DWKRYD
      </motion.a>

      <svg
        className="appbar_icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => onNavToggleClick()}
      >
        <motion.path
          variants={{
            expanded: {
              d: "M12.4501 37.65L10.3501 35.55L21.9001 24L10.3501 12.45L12.4501 10.35L24.0001 21.9L35.5501 10.35L37.6501 12.45L26.1001 24L37.6501 35.55L35.5501 37.65L24.0001 26.1L12.4501 37.65Z",
            },
            collpased: {
              d: "M6 36V33H42V36H6ZM6 25.5V22.5H42V25.5H6ZM6 15V12H42V15H6Z",
            },
          }}
          animate={isNavExpanded ? "expanded" : "collpased"}
          className="appbar_icon"
          fill="black"
        />
      </svg>
    </header>
  );
};

export default AppBar;
