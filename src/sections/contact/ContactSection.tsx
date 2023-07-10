"use client";
import Socials from "@/lib/data/socials";
import "./contact.scss";
import { useRive } from "@rive-app/react-canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  const { RiveComponent } = useRive({
    src: "./solar_system.riv",
    autoplay: true,
  });

  return (
    <section id="contact">
      <header className="contact_header">
        <span className="contact_header_sub_title">Get in Touch</span>
        <span className="contact_header_title">Contact Me</span>
      </header>

      <div className="contact_main">
        <div className="contact_main_divider"/>

        <div className="contact_main_title">
          <span>Interest in collaborating ?</span>
        </div>

        <div className="contact_main_body">
          <span>
            I&apos;m always open to discussing product design and mobile
            development or partnership oppurtunities
          </span>
        </div>
      </div>

      <div className="contact_container">
        <a
          href="mailto:wiki.riyadi@gmail.com"
          className="contact_email"
          target="_blank"
        >
          Start a conversation
        </a>

        <div className="contact_social">
          {Socials.map((social, index) => (
            <a
              href={social.url}
              className="contact_social_item"
              key={index}
              target="_blank"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="rive_container">
        <RiveComponent />
      </div>

      <footer className="contact_footer">
        <span>Copyright © {new Date().getFullYear()} | Dwiki Riyadi</span>
      </footer>
    </section>
  );
};

export default ContactSection;
