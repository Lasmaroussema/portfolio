// src/app/pages/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section-container">
      <h1 class="text-4xl font-bold mb-6 text-center">Get In Touch</h1>
      <div class="max-w-4xl mx-auto flex w-100 justify-center items-center">
        
        <div class="flex w-100 justify-center items-center " style="box-shadow: 0 0 2px black;">
          <!-- Connect Section -->
          <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-6">Connect With Me</h2>
            
            <div class="space-y-6">
              <a 
                href="https://www.linkedin.com/in/oussema-lasmar-6a8977266/" 
                target="_blank" 
                class="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div class="w-10 h-10 text-blue-600 flex items-center justify-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh2DiY-UY_24sTF_1-yecTQI275oFKmBKxg&s" alt="" srcset="">
                </div>
                <div class="ml-4">
                  <h3 class="font-medium">LinkedIn</h3>
                  <p class="text-slate-600 dark:text-slate-400">Connect professionally</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Lasmaroussema" 
                target="_blank" 
                class="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div class="w-10 h-10 text-slate-800 dark:text-white flex items-center justify-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1HctiRAMzzzwozHLo0YxPfZF1vQrjvcWeg&s" alt="" srcset="">
                </div>
                <div class="ml-4">
                  <h3 class="font-medium">GitHub</h3>
                  <p class="text-slate-600 dark:text-slate-400">Check out my projects</p>
                </div>
              </a>
              
              <a 
                href="https://medium.com/@lasmaroussama88" 
                target="_blank" 
                class="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div class="w-10 h-10 text-slate-800 dark:text-white flex items-center justify-center">
                  <img src="https://cdn.freebiesupply.com/images/large/2x/medium-icon-white-on-black.png" alt="" srcset="">
                </div>
                <div class="ml-4">
                  <h3 class="font-medium">Medium Blog</h3>
                  <p class="text-slate-600 dark:text-slate-400">Read my latest articles</p>
                </div>
              </a>
              
              <a 
                href="mailto:lasmaroussama88@gmail.com" 
                class="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div class="w-10 h-10 text-red-500 flex items-center justify-center">
                  <img src="https://i.pinimg.com/736x/1f/49/b0/1f49b01cbec581b4cf52bf0462304e9d.jpg" alt="" srcset="">
                </div>
                <div class="ml-4">
                  <h3 class="font-medium">Email</h3>
                  <p class="text-slate-600 dark:text-slate-400">{{'lasmaroussama88@gmail.com'}}</p>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Contact Form -->
         
          
 
  `,
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    // In a real application, you would call a service to send the form data
    // For demonstration purposes, we'll simulate a successful submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      this.submitted = false;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}