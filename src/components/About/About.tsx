import styles from "./About.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 15%",
          scrub: false,
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      // Animate photo
      timeline.fromTo(
        `.${styles.photo}`,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );

      // Animate paragraphs
      timeline.fromTo(
        paragraphsRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.about} ref={sectionRef} id="about">
      <div className={styles.text}>
        <h2>About Me</h2>
        {[
          "I'm a frontend-focused software engineer based in Serbia, passionate about clean designs, smooth interactions, and pixel-perfect user experiences. I bring a creative flair and an unmatched attention to detail to everything I build.",
          "While I love designing and coding, my long-term vision is project management - combining technical depth with strong people skills. I thrive in roles that balance engineering with team coordination and strategy.",
          "I'm most confident with React and TypeScript, but I've worked with a wide range of technologies including .NET, Python, C++, Node.js, and microservice architecture. I'm adaptable, fast-learning, and always down to dive into something new.",
          "Right now, I'm looking for opportunities to grow - whether that's on a front-end team, in a full-stack environment, or supporting product teams with cross-functional collaboration.",
        ].map((text, i) => (
          <p
            key={i}
            ref={(el) => {
              paragraphsRef.current[i] = el;
            }}
          >
            {text}
          </p>
        ))}
      </div>
      <div className={styles.photo}>
        <img src="../../assets/facecard.jpg" alt="Ela portrait" />
      </div>
    </section>
  );
};

export default About;
