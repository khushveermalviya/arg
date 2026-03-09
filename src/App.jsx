import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'Full-stack React & Node.js store with payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#FF6B9D'
    },
    {
      id: 2,
      title: 'DevOps Dashboard',
      desc: 'Real-time monitoring with Docker & Kubernetes integration',
      tags: ['React', 'Docker', 'K8s', 'Grafana'],
      color: '#C06C84'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      desc: 'Intelligent chatbot with machine learning backend',
      tags: ['React', 'Python', 'ML', 'WebSocket'],
      color: '#6C5B7B'
    },
    {
      id: 4,
      title: 'Social Network',
      desc: 'Real-time messaging and media sharing platform',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      color: '#355C7D'
    },
    {
      id: 5,
      title: 'Analytics Engine',
      desc: 'Data visualization and reporting dashboard',
      tags: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      color: '#2A9D8F'
    },
    {
      id: 6,
      title: 'Mobile App',
      desc: 'Cross-platform app with React Native',
      tags: ['React Native', 'Firebase', 'Redux', 'iOS/Android'],
      color: '#E76F51'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'D3.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jest', 'Webpack'] }
  ]

  const scrollToSection = (id) => {
    setActiveNav(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navigation Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Khushveer</span>
            <div className="logo-dot"></div>
          </div>
          <nav className="nav-menu">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeNav === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-word">Creative</span>
              <span className="title-word">Developer</span>
              <span className="title-word">& Designer</span>
            </h1>
            <p className="hero-subtitle">
              Building beautiful, scalable web experiences with modern technologies
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="code-window">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <pre className="code-content">
{`const developer = {
  name: "Khushveer",
  passion: "Innovation",
  skills: ["React", "Node.js"],
  status: "Always Learning"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="header-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a love for clean code.
              With over 5+ years of experience, I've helped startups and enterprises build scalable,
              user-friendly applications.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
              or sharing knowledge with the developer community.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2"/>
                <circle cx="100" cy="80" r="25" stroke="currentColor" strokeWidth="2"/>
                <path d="M 70 140 Q 100 160 130 140" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <div className="header-underline"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                '--project-color': project.color
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-icon">→</div>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-overlay">
                <button className="view-btn">View Project →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Build Something Amazing?</h2>
        <p>Let's collaborate and create exceptional digital experiences</p>
        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
          Start a Project
        </button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="header-underline"></div>
        </div>
        <div className="contact-content">
          <p>I'm always interested in hearing about new projects and opportunities.</p>
          <div className="contact-methods">
            <a href="mailto:khushveer@portfolio.com" className="contact-link">
              <span className="contact-icon">✉</span>
              <span>khushveer@portfolio.com</span>
            </a>
            <a href="tel:+1234567890" className="contact-link">
              <span className="contact-icon">☎</span>
              <span>+1 (234) 567-890</span>
            </a>
            <a href="#" className="contact-link">
              <span className="contact-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="contact-link">
              <span className="contact-icon">🐙</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Khushveer. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
