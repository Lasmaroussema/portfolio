import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero  text-white py-24" style="background-image: linear-gradient(to right,#8fbcbb,#8fbcbb);">
      <div class="container mx-auto px-4 flex justify-around">
        <div>
          <img class="rounded-lg" src="/images/my_pic.jpg" width="440" height="440" alt="" srcset="">
        </div>
        <div class="flex flex-col items-center text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Lasmar Oussema</h1>
          <h2 class="text-2xl md:text-3xl mb-8">Full Stack Developer</h2>
          <h2 class="text-2xl md:text-3xl mb-8">DevSecOps Engineer</h2>
          <p class="text-lg md:text-xl max-w-2xl mb-8">
            Passionate developer with expertise in building modern web applications.
            Specialized in creating robust DevOps solutions.
          </p>
          <div class="flex gap-4">
            <a routerLink="/projects" class="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">View Projects</a>
            <a routerLink="/contact" class="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors">Contact Me</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">What I Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Frontend Development</h3>
            <p>Building responsive and interactive user interfaces with modern frameworks like Angular and React.</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6" y1="6" y2="6"/><line x1="6" x2="6" y1="18" y2="18"/></svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Backend Development</h3>
            <p>Creating scalable and efficient server-side applications using Node.js, Spring Boot, and more.</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
            </div>
            <h3 class="text-xl font-bold mb-2">DevOps</h3>
            <p>Implementing CI/CD pipelines, containerization, and cloud infrastructure using Docker, Kubernetes, and AWS.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}