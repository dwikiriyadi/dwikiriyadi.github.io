"use client";
import "./styles/navigation.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Menus from "@/lib/data/menus";
import Socials from "@/lib/data/socials";
import INavigationProps from "./INavigationProps";
import NavigationOverlay from "./NavigationOverlay";
import NavigationToggle from "./NavigationToggle";
import NavigationDrawer from "./NavigationDrawer";

const Navigation = ({ isExpanded, onToggleNavigation }: INavigationProps) => {
  return (
    <motion.div className="navigation" layout data-expanded={isExpanded}>
      {/*this is drawer*/}
      <NavigationDrawer
        isExpanded={isExpanded}
        onToggleNavigation={() => onToggleNavigation?.()}
      />

      {/*this is toggle button*/}
      <NavigationToggle
        isExpanded={isExpanded}
        onToggleNavigation={() => onToggleNavigation?.()}
      />

      {/*this is overlay*/}
      <NavigationOverlay isExpanded={isExpanded} />
    </motion.div>
  );
};

export default Navigation;
