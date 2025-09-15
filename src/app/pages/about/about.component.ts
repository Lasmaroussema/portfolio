// src/app/pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-container">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 text-center">About Me</h1>
        
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 mb-8">
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div class="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/images/me.png" 
                alt="Profile Photo" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <div class="flex-grow">
              <h2 class="text-2xl font-semibold mb-4">My Journey</h2>
              
              <p class="mb-4">
                I'm a passionate Full Stack Developer with 2 years of experience building web applications
                with modern technologies.
              </p>
              
              <p class="mb-4">
              I specialize in building scalable web applications using Angular on the frontend and Spring Boot/Node.js on the backend. I'm particularly interested in cloud-native architecture, microservices, and creating intuitive user experiences. I also apply DevOps practices and tools like ArgoCD, Terraform, Docker, Git, Kubernetes, and Jenkins to automate deployments, ensure scalability, and streamline CI/CD pipelines.
              </p>
              
              <p>
                I believe in continuous learning and regularly , follow the latest updates and attend tech conferences and meetups to stay updated with the latest industry trends.
              </p>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">Education</h2>
            <ul class="space-y-4">
              <li>
                <p class="font-medium">Baccalaureate Diploma high Honors in Mathematics, </p>
                <p class="text-slate-600 dark:text-slate-400">Hzag high school , Sfax, Tunisia
                2021</p>
              </li>
              <li>
                <p class="font-medium">Two years of the integrated preparatory cycle ,Higher Institute of Applied Sciences and Technology of Sousse</p>
                <p class="text-slate-600 dark:text-slate-400">(ISSAT-SO), Sousse, Tunisia
                2021-2023</p>
              </li>
              <li>
                <p class="font-medium">First year of the software engineering cycle, Higher Institute of Applied Sciences and Technology of Sousse</p>
                <p class="text-slate-600 dark:text-slate-400">(ISSAT-SO) , Sousse, Tunisia
                2023-2024</p>
              </li>
              <li>
                <p class="font-medium">Second year of the software engineering cycle, Higher Institute of Applied Sciences and Technology of Sousse</p>
                <p class="text-slate-600 dark:text-slate-400">(ISSAT-SO) , Sousse, Tunisia
                2024-2025</p>
              </li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">Associative / Work Experience</h2>
            <ul class="space-y-4">
              <li>
                <p class="font-medium">HEAD OF TECHNICAL TRAINING DEPARTEMENT,</p>
                <p class="text-slate-600 dark:text-slate-400">ARSII Association</p>
              </li>
              <li>
                <p class="font-medium">Freelance</p>
                <p class="text-slate-600 dark:text-slate-400">Worked On two Projects</p>
              </li>
              <li>
                <p class="font-medium">Summer internship in  " PrestaCode "</p>
                <p class="text-slate-600 dark:text-slate-400">Build full stack web application</p>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div class="mt-12 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Certifications</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">KodeKloud DevOps certification</p>
              <p class="text-slate-600 dark:text-slate-400"> 2025</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">Udemy MEAN Stuck</p>
              <p class="text-slate-600 dark:text-slate-400"> 2022</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">KodeKloud DevOps certification</p>
              <p class="text-slate-600 dark:text-slate-400">2024-2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}