"use client";
import "./styles/navigation_drawer.scss";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menus from "@/lib/data/menus";
import Socials from "@/lib/data/socials";
import INavigationProps from "./INavigationProps";

const slideIn = {
  duration: 0.5,
  type: "tween",
  ease: "easeInOut",
};

const NavigationDrawer = ({
  isExpanded,
  onToggleNavigation,
}: INavigationProps) => {
  return (
    <motion.div
      className="nav_drawer"
      layout
      data-expanded={isExpanded}
      transition={slideIn}
    >
      <motion.a
        href="#home"
        className="nav_logo"
        onClick={() => onToggleNavigation?.()}
      >
        <motion.img src="./logo.svg" alt="logo" />
      </motion.a>

      <div className="nav_menu">
        {Menus.map((menu, index) => (
          <a
            href={menu.url}
            className="nav_menu_item"
            key={index}
            onClick={() => onToggleNavigation?.()}
          >
            {menu.name}
          </a>
        ))}
      </div>

      <div className="nav_footer">
        {Socials.map((social, index) => (
          <a
            href={social.url}
            className="nav_footer_item"
            key={index}
            target="_blank"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationDrawer;
