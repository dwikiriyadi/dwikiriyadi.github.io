"use client";
import Socials from "@/lib/data/socials";
import "./contact.scss";
import { useRive } from "@rive-app/react-canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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

      <div className="rive_container">
        <RiveComponent />
      </div>

      <main className="contact_main">
        <span className="contact_main_title">Interest in collaborating ?</span>
        <span className="contact_main_description">
          I&apos;m always open to discussing product design and mobile
          development or partnership opportunities
        </span>
        <div className="contact_main_buttons">
          <a
            href="mailto:wiki.riyadi@gmail.com"
            className="button filled"
            target="_blank"
          >
            Start a conversation
          </a>

          <span className="contact_main_socials">
            {Socials.map((social, index) => (
              <a
                href={social.url}
                className="button icon"
                key={index}
                target="_blank"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={social.icon} size="xl" />
              </a>
            ))}
          </span>
        </div>
      </main>

      <Image
        src="dot_3_2.svg"
        alt="dot_3_2"
        width="330"
        height="220"
        className="contact_dots"
      />
    </section>
  );
};

export default ContactSection;
