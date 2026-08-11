import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto space-y-12">
        <div class="text-center space-y-4">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/oussema-lasmar-6a8977266/" target="_blank"
             class="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Connect professionally</p>
            </div>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/Lasmaroussema" target="_blank"
             class="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">GitHub</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">View source code & repos</p>
            </div>
          </a>

          <!-- Medium -->
          <a href="https://medium.com/@lasmaroussama88" target="_blank"
             class="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Medium Blog</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Read technical articles</p>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:lasmaroussama88@gmail.com"
             class="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Email</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">lasmaroussama88&#64;gmail.com</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}