import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto space-y-10">
        
        <!-- Header & Current Status Banner -->
        <div class="text-center space-y-4">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate Software Engineer & DevSecOps Enthusiast building modern, robust, and secure cloud applications.
          </p>

          <!-- Current Status Badge -->
          <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800/60 text-slate-800 dark:text-slate-200 text-sm font-medium shadow-sm">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>Current Status: <strong>Software Engineering Intern</strong> at 
              <a href="https://www.c4sam.com/en" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1">
                C4SAM
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </span>
          </div>
        </div>
        
        <!-- Profile & Journey Card -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 transition-colors">
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div class="relative group flex-shrink-0">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-800">
                <img 
                  src="/images/me.png" 
                  alt="Lasmar Oussema" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div class="flex-grow space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-center md:text-left">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h2>
              
              <p>
                I am a Software Engineering student and DevSecOps enthusiast with hands-on experience in building modern web applications and automated deployment pipelines.
              </p>
              
              <p>
                I am passionate about cloud-native architecture, microservices, continuous security (DevSecOps), and creating intuitive user experiences.
              </p>
              
              <p>
                I leverage DevOps and Cloud automation tools like Kubernetes, Docker, Terraform, Ansible, Jenkins, and ArgoCD to streamline CI/CD pipelines, ensure scalability, and optimize infrastructure.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Grid: Education & Experience -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Experience Card -->
          <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 space-y-6 transition-colors">
            <div class="flex items-center gap-3">
              <div class="p-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
            </div>
            
            <div class="space-y-6 relative border-l-2 border-slate-200 dark:border-slate-800 pl-4 ml-2">

              <!-- C4SAM Internship Item -->
              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900"></div>
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-bold text-slate-900 dark:text-white">Software Engineering Intern</h3>
                  <span class="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">Current</span>
                </div>
                <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <a href="https://www.c4sam.com/en" target="_blank" class="hover:underline inline-flex items-center gap-1">
                    C4SAM
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Working on AI assistant integrations, MCP services, rate-limiting security middleware, and web architecture.</p>
              </div>

              <!-- PrestaCode Summer Internship -->
              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                <h3 class="font-bold text-slate-900 dark:text-white">Summer Intern</h3>
                <p class="text-sm font-medium text-slate-700 dark:text-slate-300">PrestaCode</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Built full-stack web applications with modern framework stacks.</p>
              </div>

              <!-- ARSII Association -->
              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                <h3 class="font-bold text-slate-900 dark:text-white">Head of Technical Training Department</h3>
                <p class="text-sm font-medium text-slate-700 dark:text-slate-300">ARSII Association</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Organized workshops and technical training sessions for engineering students.</p>
              </div>

              <!-- Freelance -->
              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                <h3 class="font-bold text-slate-900 dark:text-white">Freelance Full Stack Developer</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Delivered 2 custom full-stack software solutions for client requirements.</p>
              </div>

            </div>
          </div>

          <!-- Education Card -->
          <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 space-y-6 transition-colors">
            <div class="flex items-center gap-3">
              <div class="p-3 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">Education</h2>
            </div>
            
            <div class="space-y-6 relative border-l-2 border-slate-200 dark:border-slate-800 pl-4 ml-2">

              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900"></div>
                <span class="text-xs text-blue-600 dark:text-blue-400 font-semibold">2023 - 2026</span>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">Software Engineering Cycle</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400">Higher Institute of Applied Sciences and Technology of Sousse (ISSAT-SO), Tunisia</p>
              </div>

              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">2021 - 2023</span>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">Integrated Preparatory Cycle</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400">ISSAT-SO, Sousse, Tunisia</p>
              </div>

              <div class="relative">
                <div class="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">2021</span>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">Baccalaureate Diploma (High Honors in Math)</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400">Hzag High School, Sfax, Tunisia</p>
              </div>

            </div>
          </div>

        </div>
        
        <!-- Certifications Section -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 space-y-4 transition-colors">
          <div class="flex items-center gap-3 mb-2">
            <div class="p-3 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/40">
              <h3 class="font-semibold text-slate-900 dark:text-white text-sm">KodeKloud DevOps Certification</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Issued: 2025</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/40">
              <h3 class="font-semibold text-slate-900 dark:text-white text-sm">KodeKloud DevOps Engineer</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">2024 - 2025</p>
            </div>
            <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/40">
              <h3 class="font-semibold text-slate-900 dark:text-white text-sm">Udemy MEAN Stack Development</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Issued: 2022</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class AboutComponent { }