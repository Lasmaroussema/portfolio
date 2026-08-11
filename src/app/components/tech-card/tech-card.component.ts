import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
      
      <!-- Icon Wrapper -->
      <div class="w-14 h-14 mb-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-all duration-300 shadow-inner">
        <img [src]="technology.url" [alt]="technology.name" class="w-full h-full object-contain filter drop-shadow-sm">
      </div>

      <!-- Tech Name -->
      <h3 class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {{ technology.name }}
      </h3>

      <!-- Experience Pill -->
      <span class="mt-2 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
        {{ technology.experience }}
      </span>
    </div>
  `
})
export class TechCardComponent {
  @Input() technology!: Technology;
}
