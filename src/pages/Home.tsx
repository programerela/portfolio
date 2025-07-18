import React from 'react';
import './Home.css';
// Import your components here
import Navbar from '../components/Navbar/Navbar';
// import Footer from './components/Footer';
// import ProjectCard from './components/ProjectCard';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
?      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-animate">Hi, I'm</span>
            <span className="text-animate text-highlight">[Your Name]</span>
          </h1>
          <p className="hero-subtitle text-animate">Full Stack Developer & Problem Solver</p>
          <p className="hero-description text-animate">
            I create digital experiences that are both functional and beautiful.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary pulse-effect"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content">
            <div className="about-text slide-in-left">
              <p>
                I'm a passionate developer with experience in modern web technologies. 
                I love turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                When I'm not coding, you can find me [your hobbies/interests].
              </p>
            </div>
            <div className="about-image slide-in-right">
              <div className="placeholder-image">
                <div className="image-overlay"></div>
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category hover-lift">
              <h3>Frontend</h3>
              <ul>
                <li className="skill-item">React</li>
                <li className="skill-item">TypeScript</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">HTML/CSS</li>
              </ul>
            </div>
            <div className="skill-category hover-lift">
              <h3>Backend</h3>
              <ul>
                <li className="skill-item">Node.js</li>
                <li className="skill-item">Express</li>
                <li className="skill-item">Python</li>
                <li className="skill-item">Database</li>
              </ul>
            </div>
            <div className="skill-category hover-lift">
              <h3>Tools</h3>
              <ul>
                <li className="skill-item">Git</li>
                <li className="skill-item">Vite</li>
                <li className="skill-item">VS Code</li>
                <li className="skill-item">Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid">
            {/* Replace these with your ProjectCard components */}
            {/* Example: */}
            {/* <ProjectCard 
              title="Project Name 1"
              description="Brief description"
              image="/path/to/image"
              liveLink="https://..."
              githubLink="https://..."
            /> */}
            
            {/* Temporary placeholder - replace with your ProjectCard components */}
            <div className="project-card hover-lift">
              <div className="project-image">
                <div className="placeholder-image">
                  <div className="image-overlay"></div>
                  Project Screenshot
                </div>
              </div>
              <div className="project-info">
                <h3>Project Name 1</h3>
                <p>Brief description of what this project does and the technologies used.</p>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card hover-lift">
              <div className="project-image">
                <div className="placeholder-image">
                  <div className="image-overlay"></div>
                  Project Screenshot
                </div>
              </div>
              <div className="project-info">
                <h3>Project Name 2</h3>
                <p>Brief description of what this project does and the technologies used.</p>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card hover-lift">
              <div className="project-image">
                <div className="placeholder-image">
                  <div className="image-overlay"></div>
                  Project Screenshot
                </div>
              </div>
              <div className="project-info">
                <h3>Project Name 3</h3>
                <p>Brief description of what this project does and the technologies used.</p>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info slide-in-left">
              <p>I'm always open to discussing new opportunities and interesting projects.</p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link hover-glow">
                  📧 your.email@example.com
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="contact-link hover-glow">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/yourusername" className="contact-link hover-glow">
                  🐙 GitHub
                </a>
              </div>
            </div>
            <div className="contact-form slide-in-right">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-primary glow-effect">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Replace this with your Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;