import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 border-t border-slate-700 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <p class="text-slate-300 font-medium">© {{currentYear}} Lasmar Oussema .</p>
            <p class="text-slate-400 text-sm mt-2">Full Stack Developer</p>
            <p class="text-slate-400 text-sm mt-2">DevOps Enthusiast</p>
          </div>
          
          <div class="flex flex-col items-center md:items-end space-y-4">
            <div class="flex gap-5">
              <a href="https://github.com/Lasmaroussema" target="_blank" 
                class="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  class="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/oussema-lasmar-6a8977266/" target="_blank" 
                class="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  class="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://medium.com/@lasmaroussama88" target="_blank" 
                class="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  class="lucide lucide-book-open">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      margin-top: auto;
    }
    
    @media (prefers-reduced-motion: no-preference) {
      a:hover svg {
        filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.5));
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}