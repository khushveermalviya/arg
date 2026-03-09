import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I'm a passionate developer with expertise in
          modern web technologies.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A React application with modern features</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Docker and Kubernetes deployment</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Full-stack web application</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Get in touch: contact@portfolio.com</p>
      </section>

      <footer className="footer">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
