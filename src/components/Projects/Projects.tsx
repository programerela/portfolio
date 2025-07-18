import styles from "./Projects.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Storefront",
    description: "A full-stack store with cart, checkout, and admin dashboard.",
    image: "/projects/project1.jpg",
    github: "https://github.com/programerela/voyages-fe",
    link: "https://ecommerce-live-demo.com",
  },
  {
    title: "Design Portfolio",
    description: "A sleek site to showcase my visual work and branding.",
    image: "/projects/project2.jpg",
    github: "https://github.com/programerela/portfolio",
    link: "https://mydesignportfolio.com",
  },
  {
    title: "Mobile App UI",
    description: "An intuitive and modern app interface for productivity.",
    image: "/projects/project3.jpg",
    github: "https://github.com/programerela/mobile-ui",
    link: "https://mobileui-app.com",
  },
  {
    title: "Dashboard System",
    description: "A data-driven dashboard with user analytics and reports.",
    image: "/projects/project4.jpg",
    github: "https://github.com/programerela/dashboard",
    link: "https://dashboardapp.com",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${projects.length * 150}vh`,
          scrub: true,
          pin: true,
        },
      });

      projects.forEach((_, i) => {
        const slide = slidesRef.current[i];
        const text = textRefs.current[i];

        // Animate slide in
        tl.to(slide, {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        }, `slide-${i}`);

        // Animate text in
        tl.to(text, {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        }, `slide-${i}`);

        // Hold
        tl.to({}, { duration: 1.5 });

        // Animate out (unless it's the last one)
        if (i !== projects.length - 1) {
          tl.to(text, {
            y: -50,
            autoAlpha: 0,
            duration: 0.6,
            ease: "power2.in",
          }, `slide-out-${i}`);
          tl.to(slide, {
            autoAlpha: 0,
            duration: 0.6,
            ease: "power2.in",
          }, `slide-out-${i}`);
        }
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
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
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
