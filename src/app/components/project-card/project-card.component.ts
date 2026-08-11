import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      <!-- Project Image -->
      <div class="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div class="space-y-2">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Badges -->
        <div class="space-y-4 pt-2">
          <div class="flex flex-wrap gap-1.5">
            @for (tech of project.technologies; track tech) {
              <span class="bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-200/60 dark:border-blue-900/60">
                {{ tech }}
              </span>
            }
          </div>

          <!-- Links -->
          <div class="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            @if (project.liveUrl) {
              <a [href]="project.liveUrl" target="_blank" class="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo / Article
              </a>
            }
            @if (project.githubUrl) {
              <a [href]="project.githubUrl" target="_blank" class="inline-flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub
              </a>
            }
          </div>
        </div>

      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() project!: Project;
}