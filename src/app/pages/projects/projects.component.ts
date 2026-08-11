import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto space-y-12">
        <div class="text-center space-y-4">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work in DevOps automation, microservices, cloud infrastructure, and full-stack web applications.
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
      id: 0,
      title: 'Automating Infrastructure & Deployment with Terraform and Ansible on Azure VM',
      description: 'Automated infrastructure provision project on Azure VM using Terraform and Ansible to deploy containerized applications effortlessly.',
      imageUrl: '/images/image copy.png',
      technologies: ['Ansible', 'Terraform', 'Azure', 'Docker'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/JAAT'
    },
    {
      id: 1,
      title: 'Automating Kubernetes Deployments with GitOps: Practical Guide Using ArgoCD',
      description: 'Practical engineering guide walking through continuous delivery pipelines, automated deployments, and infrastructure as code with ArgoCD.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*TkYyNHK5mOdEHqPza86Ntw.png',
      technologies: ['ArgoCD', 'Kubernetes', 'GitOps', 'Prometheus'],
      liveUrl: 'https://medium.com/p/decdf4fde8aa',
      githubUrl: ''
    },
    {
      id: 2,
      title: 'Automating CI/CD with Jenkins, SonarQube, GitHub, Docker Hub, and Kubernetes',
      description: 'Comprehensive automation of CI/CD pipelines using Jenkins, GitHub, Docker Hub, SonarQube, and Kubernetes for fast, reliable application releases.',
      imageUrl: '/images/image.png',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube', 'Git'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/portfolio'
    },
    {
      id: 3,
      title: 'Hotel Management System',
      description: 'Comprehensive Hotel Management System designed to handle room bookings, customer check-ins/check-outs, billing, and staff management.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      technologies: ['Java', 'Sockets', 'RMI', 'SQL'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/Hotel-Management'
    },
    {
      id: 4,
      title: 'Real-time ChatApp with Angular & Spring Boot',
      description: 'Real-time messaging platform built with Angular frontend and Spring Boot backend, featuring WebSocket communication and user authentication.',
      imageUrl: 'https://images.unsplash.com/photo-1611606063665-ee7946f0787a?q=80&w=800&auto=format&fit=crop',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'WebSockets'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/chatapp-angular-spring'
    },
    {
      id: 5,
      title: 'Intelligent ChatBot with Custom Training Data',
      description: 'AI ChatBot powered by custom domain training data, designed to deliver accurate context-aware responses and multi-platform integration.',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop',
      technologies: ['Python', 'Flask', 'JSON', 'AI/ML'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/ChatBot-with-custom-trainning'
    }
  ];
}