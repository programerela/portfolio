import styles from './Hero.module.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.leftAccent}`, {
        height: 0,
        duration: 1.2,
        ease: 'power2.out',
      })

      gsap.from(`.${styles.line}`, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      })

      gsap.from(`.${styles.subtitle}`, {
        opacity: 0,
        y: 40,
        delay: 0.6,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from(`.${styles.scroll}`, {
        opacity: 0,
        y: -10,
        delay: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.container}>
        <div className={styles.leftAccent}></div>
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className={styles.line}>Hi,</span><br />
            <span className={styles.line}>
              I'm <span className={styles.glow}>Ela</span>
            </span>
          </h1>
          <p className={styles.subtitle}>
            I craft sleek web experiences with clean code and bold visuals.
          </p>
        </div>
      </div>
      <div className={styles.scroll}>Scroll ↓</div>
    </section>
  )
}

export default Hero
