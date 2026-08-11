import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      
      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Hero Column: Info & CTA -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Software Engineer Badge -->
            <a href="https://www.c4sam.com/en" target="_blank" 
               class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold hover:bg-blue-500/20 transition-all shadow-sm">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Software Engineer &#64;
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <!-- Name & Title -->
            <div class="space-y-3">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                Lasmar <span class="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Oussema</span>
              </h1>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Full Stack Developer & DevSecOps Engineer
              </h2>
            </div>

            <!-- Bio Description -->
            <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Designing scalable full-stack applications with Angular & Spring Boot, while automating secure, enterprise-grade deployment pipelines using Kubernetes, Docker, Terraform, and ArgoCD.
            </p>

            <!-- Featured Tech Pills -->
            <div class="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              <span class="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">Angular</span>
              <span class="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">Spring Boot</span>
              <span class="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">TypeScript</span>
              <span class="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">Docker & K8s</span>
              <span class="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">GitOps & ArgoCD</span>
            </div>

            <!-- Call to Actions -->
            <div class="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a routerLink="/projects" class="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all">
                View Projects
              </a>
              <a routerLink="/contact" class="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold hover:border-blue-500/50 hover:-translate-y-0.5 transition-all shadow-sm">
                Get In Touch
              </a>
            </div>

          </div>

          <!-- Right Hero Column: Developer Terminal Preview -->
          <div class="lg:col-span-5">
            <div class="relative group">
              <!-- Glow backdrop -->
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <!-- Terminal Window -->
              <div class="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                
                <!-- Terminal Header Bar -->
                <div class="px-4 py-3 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="w-3 h-3 rounded-full bg-red-500"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span class="text-slate-400 text-xs font-semibold">developer-profile.ts</span>
                  <span class="text-slate-600 text-xs">UTF-8</span>
                </div>

                <!-- Code Content -->
                <div class="p-5 text-slate-300 space-y-2 leading-relaxed">
                  <p><span class="text-purple-400">const</span> <span class="text-blue-400">engineer</span> = &#123;</p>
                  <p class="pl-4"><span class="text-indigo-400">name</span>: <span class="text-emerald-400">'Lasmar Oussema'</span>,</p>
                  <p class="pl-4"><span class="text-indigo-400">role</span>: <span class="text-emerald-400">'Full Stack & DevSecOps'</span>,</p>
                  <p class="pl-4"><span class="text-indigo-400">status</span>: <span class="text-emerald-400">'Software Engineer '</span>,</p>
                  <p class="pl-4"><span class="text-indigo-400">location</span>: <span class="text-emerald-400">'Sousse, Tunisia'</span>,</p>
                  <p class="pl-4"><span class="text-indigo-400">skills</span>: [</p>
                  <p class="pl-8 text-amber-300">'Angular', 'Spring Boot', 'Node.js',</p>
                  <p class="pl-8 text-amber-300">'Docker', 'Kubernetes', 'ArgoCD',</p>
                  <p class="pl-8 text-amber-300">'Terraform', 'SonarQube', 'GitLab'</p>
                  <p class="pl-4">],</p>
                  <p class="pl-4"><span class="text-indigo-400">availableForHire</span>: <span class="text-blue-400">true</span></p>
                  <p>&#125;;</p>
                  <div class="pt-2 text-slate-500 flex items-center gap-2">
                    <span class="text-emerald-400">➜</span> <span>ready to build next-gen software</span>
                    <span class="w-2 h-4 bg-blue-500 animate-pulse"></span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services / Expertise Section -->
    <section class="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <div class="text-center space-y-3 mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Engineering Expertise</h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Delivering robust end-to-end web architectures combined with automated DevSecOps pipelines.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1 -->
          <div class="glass-card glass-card-hover rounded-2xl p-8 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Frontend Architecture</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Crafting responsive, accessible, and type-safe frontends with Angular, TypeScript, Signals, and modern responsive design systems.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="glass-card glass-card-hover rounded-2xl p-8 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Backend & Databases</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Building secure REST APIs and microservices with Spring Boot, Node.js, and Python, paired with optimized PostgreSQL and MySQL databases.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="glass-card glass-card-hover rounded-2xl p-8 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">DevSecOps & Cloud</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Automating infrastructure with Terraform, Ansible, Docker, Kubernetes, Jenkins, and ArgoCD GitOps, incorporating automated security scanning.
            </p>
          </div>

        </div>

      </div>
    </section>
  `
})
export class HomeComponent { }