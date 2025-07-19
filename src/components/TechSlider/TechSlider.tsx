import styles from './TechSlider.module.css';
import { techStack } from '../../data/tech';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TechSlider = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;

      if (slider) {
        const totalWidth = slider.scrollWidth / 2;

        tweenRef.current = gsap.to(slider, {
          x: `-${totalWidth}px`,
          duration: 20,
          ease: 'linear',
          repeat: -1,
        });
      }

      return () => {
        tweenRef.current?.kill();
      };
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const pauseScroll = () => tweenRef.current?.pause();
  const resumeScroll = () => tweenRef.current?.play();

  return (
    <section className={styles.wrapper} ref={wrapperRef} id="skills">
      <h3 className={styles.title}>Skills</h3>
      <div
        className={styles.slider}
        ref={sliderRef}
        onMouseEnter={pauseScroll}
        onMouseLeave={resumeScroll}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <tech.icon />
            </div>
            <div className={styles.label}>{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSlider;
