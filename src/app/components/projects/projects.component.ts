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
    <section id="projects" class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Projetos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" 
               class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-3">{{project.title}}</h3>
              <p class="text-gray-600 mb-4">{{project.description}}</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" 
                      class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {{tech}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
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
    },
    {
      id: 3,
      title: "Calculator",
      description: "A productivity application",
      technologies: ["REact", "NgRx", "Firebase"]
    },
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
    },
    {
      id: 3,
      title: "Calculator",
      description: "A productivity application",
      technologies: ["REact", "NgRx", "Firebase"]
    }
  ];
}
