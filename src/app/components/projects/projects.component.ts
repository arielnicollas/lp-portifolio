import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="projects-section">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div *ngFor="let project of projects" class="project-card">
          <h3>{{project.title}}</h3>
          <p>{{project.description}}</p>
          <div class="technologies">
            <span *ngFor="let tech of project.technologies" class="tech-tag">
              {{tech}}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 2rem;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .project-card {
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .tech-tag {
      background: #e1e1e1;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      margin-right: 0.5rem;
      font-size: 0.9rem;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution",
      technologies: ["Angular", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Task Manager",
      description: "A productivity application",
      technologies: ["Angular", "NgRx", "Firebase"]
    }
  ];
}
