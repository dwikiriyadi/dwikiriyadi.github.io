"use client";
import "./navigation.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Menus from "@/lib/data/menus";
import Socials from "@/lib/data/socials";

type INavigationDrawerProps = {
  isNavExpanded: boolean;
  onNavToggleClick: () => void;
};

const NavigationDrawer = ({
  isNavExpanded,
  onNavToggleClick,
}: INavigationDrawerProps) => {
  return (
    <aside
      className={isNavExpanded ? "navigation expanded" : "navigation collapsed"}
    >
      {/*this is drawer*/}
      <div className="nav_drawer">
        <div className="nav_drawer_header">
          <FontAwesomeIcon
            icon={faClose}
            color="#212121"
            className="nav_drawer_header_icon"
            onClick={() => onNavToggleClick()}
          />
        </div>

        <a href="#home">
          <Image
            width={isNavExpanded ? 100 : 56}
            height={isNavExpanded ? 100 : 56}
            priority
            src="./logo.svg"
            alt="logo"
            className="nav_logo"
          />
        </a>

        <div className="nav_menu">
          {Menus.map((menu, index) => (
            <a
              href={menu.url}
              className="nav_menu_item"
              key={index}
              onClick={() => onNavToggleClick()}
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
      </div>

      {/*this is toggle button*/}
      <div className="nav_toggle" onClick={() => onNavToggleClick()}>
        <FontAwesomeIcon
          icon={faChevronRight}
          color="#FFF"
          className="nav_toggle_icon"
        />
      </div>

      {/*this is overlay*/}
      <div className="nav_overlay" />
    </aside>
  );
};

export default NavigationDrawer;
