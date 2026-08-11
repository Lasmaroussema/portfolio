import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechCardComponent } from '../../components/tech-card/tech-card.component';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TechCardComponent],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto space-y-14">
        
        <!-- Section Header -->
        <div class="text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
            <span>&lt;/stack&gt;</span> Tech Ecosystem
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Curated set of production-ready tools, frameworks, and platforms I leverage for software development, database architecture, and DevSecOps engineering.
          </p>
        </div>

        <!-- Frontend Section -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">01</div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Frontend Engineering</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            @for (tech of frontendTech; track tech.name) {
              <app-tech-card [technology]="tech"></app-tech-card>
            }
          </div>
        </div>

        <!-- Backend Section -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-sm">02</div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Backend Engineering</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            @for (tech of backendTech; track tech.name) {
              <app-tech-card [technology]="tech"></app-tech-card>
            }
          </div>
        </div>

        <!-- Databases Section (Separated from Backend) -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-sm">03</div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Databases & Storage</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            @for (tech of databaseTech; track tech.name) {
              <app-tech-card [technology]="tech"></app-tech-card>
            }
          </div>
        </div>

        <!-- DevOps & Tools Section -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div class="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-sm">04</div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">DevOps & Infrastructure</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            @for (tech of devopsTech; track tech.name) {
              <app-tech-card [technology]="tech"></app-tech-card>
            }
          </div>
        </div>

        <!-- Security Tools Section -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div class="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-sm">05</div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Security & Code Analysis</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            @for (tech of securityTech; track tech.name) {
              <app-tech-card [technology]="tech"></app-tech-card>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class TechnologiesComponent {
  frontendTech: Technology[] = [
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', icon: 'angular', experience: 'Advanced' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', icon: 'typescript', experience: 'Advanced' },
  ];

  backendTech: Technology[] = [
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', icon: 'nodejs', experience: 'Advanced' },
    { name: 'Spring Boot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', icon: 'spring', experience: 'Advanced' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', icon: 'python', experience: 'Advanced' },
  ];

  databaseTech: Technology[] = [
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', icon: 'postgresql', experience: 'Intermediate' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', icon: 'mysql', experience: 'Advanced' },
  ];

  devopsTech: Technology[] = [
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', icon: 'git', experience: 'Advanced' },
    { name: 'GitLab', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', icon: 'gitlab', experience: 'Advanced' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', icon: 'docker', experience: 'Advanced' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', icon: 'kubernetes', experience: 'Intermediate' },
    { name: 'AWS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', icon: 'aws', experience: 'Beginner' },
    { name: 'CI/CD', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', icon: 'cicd', experience: 'Intermediate' },
    { name: 'Linux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', icon: 'linux', experience: 'Advanced' },
    { name: 'Jenkins', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', icon: 'jenkins', experience: 'Intermediate' },
    { name: 'ArgoCD', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', icon: 'argocd', experience: 'Intermediate' },
    { name: 'Terraform', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', icon: 'terraform', experience: 'Intermediate' },
    { name: 'Ansible', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', icon: 'ansible', experience: 'Intermediate' },
  ];

  securityTech: Technology[] = [
    { name: 'SonarQube', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg', icon: 'sonarqube', experience: 'Intermediate' },
    { name: 'Trivy', url: 'https://raw.githubusercontent.com/aquasecurity/trivy/main/docs/imgs/logo.png', icon: 'trivy', experience: 'Intermediate' },
  ];
}