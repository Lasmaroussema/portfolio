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
                src="assets/images/profile.jpg" 
                alt="Profile Photo" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <div class="flex-grow">
              <h2 class="text-2xl font-semibold mb-4">My Journey</h2>
              
              <p class="mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience building web applications
                with modern technologies. My journey in technology started when I built my first website
                at the age of 15, and I've been hooked ever since.
              </p>
              
              <p class="mb-4">
                I specialize in building scalable web applications using Angular on the frontend and
                Spring Boot/Node.js on the backend. I'm particularly interested in cloud-native architecture,
                microservices, and creating intuitive user experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me hiking in nature, experimenting with new recipes in the
                kitchen, or contributing to open-source projects. I believe in continuous learning and regularly
                attend tech conferences and meetups to stay updated with the latest industry trends.
              </p>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">Education</h2>
            <ul class="space-y-4">
              <li>
                <p class="font-medium">Master's in Computer Science</p>
                <p class="text-slate-600 dark:text-slate-400">University of Technology, 2018-2020</p>
              </li>
              <li>
                <p class="font-medium">Bachelor's in Computer Engineering</p>
                <p class="text-slate-600 dark:text-slate-400">State University, 2014-2018</p>
              </li>
              <li>
                <p class="font-medium">Full Stack Web Development Bootcamp</p>
                <p class="text-slate-600 dark:text-slate-400">Code Academy, 2017</p>
              </li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">Work Experience</h2>
            <ul class="space-y-4">
              <li>
                <p class="font-medium">Senior Full Stack Developer</p>
                <p class="text-slate-600 dark:text-slate-400">Tech Innovations Inc., 2022-Present</p>
              </li>
              <li>
                <p class="font-medium">Full Stack Developer</p>
                <p class="text-slate-600 dark:text-slate-400">Digital Solutions Co., 2020-2022</p>
              </li>
              <li>
                <p class="font-medium">Frontend Developer</p>
                <p class="text-slate-600 dark:text-slate-400">Web Creators Ltd., 2018-2020</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Certifications</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">AWS Certified Solutions Architect</p>
              <p class="text-slate-600 dark:text-slate-400">Amazon Web Services, 2023</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">Certified Kubernetes Administrator</p>
              <p class="text-slate-600 dark:text-slate-400">Cloud Native Computing Foundation, 2022</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">Google Professional Cloud Developer</p>
              <p class="text-slate-600 dark:text-slate-400">Google Cloud, 2021</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-700 rounded p-4">
              <p class="font-medium">Oracle Certified Professional: Java SE 11 Developer</p>
              <p class="text-slate-600 dark:text-slate-400">Oracle, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}