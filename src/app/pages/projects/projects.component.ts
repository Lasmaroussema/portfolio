import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">My Projects</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each demonstrates different skills and technologies.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
            <app-project-card [project]="project"></app-project-card>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full stack e-commerce platform with product catalog, cart functionality, and secure payment processing.',
      imageUrl: '/assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      liveUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      imageUrl: '/assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'WebSockets'],
      liveUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      description: 'An interactive dashboard for financial data visualization with advanced filtering and reporting.',
      imageUrl: '/assets/images/project3.jpg',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'D3.js', 'Docker'],
      liveUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      title: 'Health & Fitness Tracker',
      description: 'A mobile-first application for tracking health metrics, workouts, and nutritional data.',
      imageUrl: '/assets/images/project4.jpg',
      technologies: ['Angular', 'Ionic', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://example.com/project4',
      githubUrl: 'https://github.com/yourusername/project4'
    },
    {
      id: 5,
      title: 'Content Management System',
      description: 'A custom CMS with role-based access control, content scheduling, and SEO optimization tools.',
      imageUrl: '/assets/images/project5.jpg',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'AWS S3'],
      liveUrl: 'https://example.com/project5',
      githubUrl: 'https://github.com/yourusername/project5'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time messaging platform with private channels, file sharing, and message history.',
      imageUrl: '/assets/images/project6.jpg',
      technologies: ['Angular', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
      liveUrl: 'https://example.com/project6',
      githubUrl: 'https://github.com/yourusername/project6'
    }
  ];
}