"use client";
import "./appbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBars } from "@fortawesome/free-solid-svg-icons";

type IAppBarProps = {
  isNavExpanded: boolean;
  onNavToggleClick: () => void;
};

const AppBar = ({ isNavExpanded, onNavToggleClick }: IAppBarProps) => {
  return (
    <header className={isNavExpanded ? "appbar expanded" : "appbar collapsed"}>
      <a href="#home" className="appbar_alias">
        DWKRYD
      </a>
      
      <FontAwesomeIcon
        icon={faBars}
        color="#212121"
        className="appbar_icon"
        onClick={() => onNavToggleClick()}
      />
    </header>
  );
};

export default AppBar;
