import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="sticky top-0 z-50 glass-nav transition-colors duration-300">
      <div class="container mx-auto px-4 py-3.5">
        <div class="flex items-center justify-between">
          <!-- Logo / Branding -->
          <a routerLink="/" class="flex items-center gap-2 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              LO
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white">Lasmar Oussema</span>
              <span class="text-xs text-blue-600 dark:text-blue-400 font-medium">Software & DevSecOps Engineer</span>
            </div>
          </a>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-1">
            <a routerLink="/" 
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               [routerLinkActiveOptions]="{exact: true}" 
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">
               Home
            </a>
            <a routerLink="/projects" 
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">
               Projects
            </a>
            <a routerLink="/technologies" 
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">
               Skills & Tech
            </a>
            <a routerLink="/about" 
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">
               About
            </a>
            <a routerLink="/contact" 
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">
               Contact
            </a>
          </nav>

          <!-- Action controls: Theme Toggle & Mobile Menu -->
          <div class="flex items-center space-x-2">
            <!-- Theme Toggle Button -->
            <button (click)="themeService.toggleTheme($event)" 
                    type="button"
                    aria-label="Toggle Light/Dark Theme"
                    class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200/80 dark:border-slate-700/80">
              @if (themeService.currentTheme() === 'dark') {
                <!-- Sun icon for Dark Mode -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              } @else {
                <!-- Moon icon for Light Mode -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              }
            </button>

            <!-- Mobile Menu Toggle Button -->
            <button (click)="mobileMenuOpen = !mobileMenuOpen" 
                    type="button" 
                    class="md:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200/80 dark:border-slate-700/80">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if (mobileMenuOpen) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        @if (mobileMenuOpen) {
          <div class="md:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-1">
            <a routerLink="/" 
               (click)="mobileMenuOpen = false"
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               [routerLinkActiveOptions]="{exact: true}" 
               class="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
               Home
            </a>
            <a routerLink="/projects" 
               (click)="mobileMenuOpen = false"
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
               Projects
            </a>
            <a routerLink="/technologies" 
               (click)="mobileMenuOpen = false"
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
               Skills & Tech
            </a>
            <a routerLink="/about" 
               (click)="mobileMenuOpen = false"
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
               About
            </a>
            <a routerLink="/contact" 
               (click)="mobileMenuOpen = false"
               routerLinkActive="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold" 
               class="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
               Contact
            </a>
          </div>
        }
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  mobileMenuOpen = false;
}
