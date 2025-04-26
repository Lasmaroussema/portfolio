import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <a routerLink="/" class="text-2xl font-bold">DevPortfolio</a>
          </div>
          
          <nav>
            <ul class="flex flex-wrap gap-6">
              <li><a routerLink="/" routerLinkActive="text-blue-400" [routerLinkActiveOptions]="{exact: true}" class="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a routerLink="/projects" routerLinkActive="text-blue-400" class="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a routerLink="/technologies" routerLinkActive="text-blue-400" class="hover:text-blue-400 transition-colors">Technologies</a></li>
              <li><a routerLink="/about" routerLinkActive="text-blue-400" class="hover:text-blue-400 transition-colors">About</a></li>
              <li><a routerLink="/contact" routerLinkActive="text-blue-400" class="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {}
