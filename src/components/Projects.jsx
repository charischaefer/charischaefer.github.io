import React from 'react';
import '../App.css';

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-container">
        <div className="projects-grid-container">
          <div className="project-grid-item">
            <div className="project-card">
              <img src="/journal-app.png" alt="Reflecta Journal App" />
              <h2>Reflecta Journal App</h2>
              <h3>
                Full-stack journaling app that provides users with daily writing prompts as well as a mood tracker.
                It allows to create, edit, and delete journal entries.
              </h3>
              <a href="https://www.loom.com/share/e96e3903c90c423ab9e7c9719d9445e9?sid=e2d943c9-39b3-4c4f-9441-d00bc7cbda0b" target="_blank">
                <button>Learn More</button>
              </a>
            </div>
          </div>
          <div className="project-grid-item">
            <div className="project-card">
              <img src="/world-clock.png" alt="World Clock App" />
              <h2>World Clock App</h2>
              <h3>
              Feature extension of a world clock app added on top of a legacy project.
              Additional features include dropdown menus to further simplify timezone selection, additional timezone information, and a map to display the selected city.
              </h3>
              <a href="https://www.loom.com/share/d1feb5a95c5748f79fd0f7b2b4b935c5?sid=a1b17922-6c0a-4089-aaea-db3772676548" target="_blank">
                <button>Learn More</button>
              </a>
            </div>
          </div>
          <div className="project-grid-item">
            <div className="project-card">
              <img src="/budget-planner.png" alt="Budget Planner App" />
              <h2>Budget Planner App</h2>
              <h3>
                Full-stack budget planner app that helps users track income and expenses.
                Features include transaction tables, authentication, and interactive visualizations.
              </h3>
              <a href="https://www.loom.com/share/0593bd92432b4f5f82976afee71e5ee2?sid=45aa78cb-72ea-4750-a831-40e9973490cd" target="_blank">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;