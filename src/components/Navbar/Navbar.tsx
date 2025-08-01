import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useGSAP(
    () => {
      if (navbarRef.current) {
        gsap.to(navbarRef.current, {
          scrollTrigger: {
            trigger: navbarRef.current,
            start: "top top",
            end: "max",
            onEnter: () => {
              setIsSticky(true);
              gsap.to(navbarRef.current, {
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                duration: 0.3,
                ease: "power1.out",
              });
            },
            onLeaveBack: () => {
              setIsSticky(false);
              gsap.to(navbarRef.current, {
                backgroundColor: "rgba(255, 255, 255, 0)",
                boxShadow: "none",
                duration: 0.3,
                ease: "power1.out",
              });
            },
            pin: true,
            pinSpacing: false,
          },
        });

        // Initial logo + links animations
        gsap.from(navbarRef.current.querySelectorAll(`.${styles.navLink}`), {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 1.8,
        });

        gsap.from(navbarRef.current.querySelector(`.${styles.logo}`), {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.5,
        });
      }
    },
    { scope: navbarRef }
  );

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")!.substring(1);
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}
    >
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <a href="#hero">
            <img src="../../../assets/logo.png" />
          </a>
        </div>
        <ul className={styles.links}>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
