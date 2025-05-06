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
      title: 'Automating Kubernetes Deployments with GitOps: A Practical Guide Using ArgoCD',
      description: 'This practical guide walks you through setting up continuous delivery pipelines, automating deployments, and managing your infrastructure as code.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*TkYyNHK5mOdEHqPza86Ntw.png',
      technologies: ['Argocd', 'Kubernetes', 'Github', 'Prometheus'],
      liveUrl: 'https://medium.com/p/decdf4fde8aa',
      githubUrl: ''
    },
    {
      id: 2,
      title: 'Automating CI/CD with Jenkins, GitHub, Docker Hub, and Kubernetes',
      description: 'Master the automation of your CI/CD pipeline using Jenkins, GitHub, Docker Hub, and Kubernetes. This guide covers building, testing, and deploying applications seamlessly, ensuring faster releases and greater reliability.',
      imageUrl: 'https://user-images.githubusercontent.com/58173938/197373162-1f510766-4437-41ba-b6f8-deead93c7693.png',
      technologies: ['Jenkins', 'Docker', 'Github', 'WebHooks','Kubernetes'],
      liveUrl: 'https://medium.com/@lasmaroussama88/automating-ci-cd-with-jenkins-github-docker-hub-and-kubernetes-c5e349683f2d',
      githubUrl: ''
    },
    {
      id: 3,
      title: 'Hotel Management System',
      description: 'A comprehensive Hotel Management System designed to handle room bookings, customer check-ins/check-outs, billing, and staff management — all through a user-friendly interface that streamlines hotel operations.',
      imageUrl: 'https://shorturl.at/uw169',
      technologies: ['Sockets','RMI','Java'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/Hotel-Management'
    },
    {
      id: 4,
      title: 'ChatApp angular spring boot',
      description: 'A real-time ChatApp built with Angular for the frontend and Spring Boot for the backend, enabling seamless messaging, user authentication, and efficient communication in a secure and responsive environment.',
      imageUrl: 'https://img.freepik.com/vecteurs-premium/modele-conception-logo-application-chat-peut-etre-utilise-icone-pour-logo-application-chat_605910-1724.jpg',
      technologies: ['Angular', 'Spring Boot', 'Flask', 'Mysql', 'WebSockets'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/chatapp-angular-spring'
    },
    {
      id: 5,
      title: 'ChatBot with custom training',
      description: 'An intelligent ChatBot powered by custom training data, designed to provide accurate, domain-specific responses. Easily adaptable to business needs with continuous learning and integration into various platforms.',
      imageUrl: 'https://media.istockphoto.com/id/1445426863/fr/vectoriel/concept-de-conception-de-logo-vectoriel-chat-bot.jpg?s=612x612&w=0&k=20&c=HMIHtjqCnZ0ajOCUrJnHlaAh8Fj1_ubPieZ1P9unoWo=',
      technologies: ['Flask','Python','Json'],
      liveUrl: '',
      githubUrl: 'https://github.com/Lasmaroussema/ChatBot-with-custom-trainning'
    },
    /*{
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time messaging platform with private channels, file sharing, and message history.',
      imageUrl: '/assets/images/project6.jpg',
      technologies: ['Angular', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
      liveUrl: 'https://example.com/project6',
      githubUrl: 'https://github.com/yourusername/project6'
    }*/
  ];
}