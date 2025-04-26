import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
      <div class="mb-2">
        <img [src]="technology.url" [alt]="technology.name" class="w-12 h-12">
      </div>
      <h4 class="font-medium">{{ technology.name }}</h4>
      <span class="text-sm text-gray-600">{{ technology.experience }}</span>
    </div>
  `
})
export class TechCardComponent {
  @Input() technology!: Technology;
}
