import styles from './TechSlider.module.css'
import { techStack } from '../../data/tech'

const TechSlider = () => {
  return (
    <section className={styles.wrapper} id="stack">
      <div className={styles.grid}>
        {techStack.map((tech, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}><tech.icon /></div>
            <div className={styles.label}>{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechSlider
