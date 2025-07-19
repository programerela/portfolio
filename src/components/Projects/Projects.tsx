import styles from "./Projects.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Voyages",
    description: "A full-stack social media webapp for sharing travel experiences.",
    image: "/assets/projects/project1.png",
    github: "https://github.com/programerela/voyages-fe",
  },
  {
    title: "Mielle Studio",
    description: "Frontend for a photography studio with booking features.",
    image: "/assets/projects/project2.png",
    github: "https://github.com/programerela/MielleFE",
  },
  {
    title: "Maison Unique",
    description: "Website for a furniture store with product listings.",
    image: "/assets/projects/project3.png",
    github: "https://github.com/programerela/MaisonUnique",
  },
  {
    title: "Schoolio",
    description: "Frontend for a school management system with student and teacher portals.",
    image: "/assets/projects/project4.png",
    github: "https://github.com/mirnesacalakovic/Schoolio_Hackaton",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      // Desktop & tablets: keep original pinned parallax
      "(min-width: 768px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${projects.length * 200}vh`,
            scrub: true,
            pin: true,
          },
        });

        gsap.set(slidesRef.current[0], { autoAlpha: 1 });
        gsap.set(textRefs.current[0], { y: 0, autoAlpha: 1 });

        projects.forEach((_, i) => {
          const slide = slidesRef.current[i];
          const text = textRefs.current[i];
          if (!slide || !text) return;

          if (i !== 0) {
            tl.to(slide, { autoAlpha: 1, duration: 1.2, ease: "power2.out" }, `slide-${i}`);
            tl.to(text, { y: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }, `slide-${i}`);
          }

          tl.to({}, { duration: 2.5 });

          if (i !== projects.length - 1) {
            tl.to(text, { y: -50, autoAlpha: 0, duration: 1.2, ease: "power2.in" }, `slide-out-${i}`);
            tl.to(slide, { autoAlpha: 0, duration: 1.2, ease: "power2.in" }, `slide-out-${i}`);
          }
        });
      },

      // Mobile: no pinning, slides stack vertically and fade in on scroll
      "(max-width: 767px)": () => {
        projects.forEach((_, i) => {
          const slide = slidesRef.current[i];
          const text = textRefs.current[i];
          if (!slide || !text) return;

          gsap.set(slide, { autoAlpha: 0, y: 30 });
          gsap.set(text, { autoAlpha: 0, y: 30 });

          ScrollTrigger.create({
            trigger: slide,
            start: "top 80%",
            onEnter: () => {
              gsap.to(slide, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" });
              gsap.to(text, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" });
            },
            onLeaveBack: () => {
              gsap.to(slide, { autoAlpha: 0, y: 30, duration: 0.6, ease: "power2.in" });
              gsap.to(text, { autoAlpha: 0, y: 30, duration: 0.6, ease: "power2.in" });
            },
          });
        });
      },
    });
  }, containerRef);

  return () => ctx.revert();
}, []);



  return (
    <section className={styles.projects} ref={containerRef} id="projects">
      {projects.map((proj, index) => (
        <div
          className={styles.slide}
          key={index}
          ref={(el) => {
            if (el) slidesRef.current[index] = el;
          }}
          style={{ backgroundImage: `url(${proj.image})` }}
        >
          <div
            className={styles.overlay}
            ref={(el) => {
              if (el) textRefs.current[index] = el;
            }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <div className={styles.buttons}>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
