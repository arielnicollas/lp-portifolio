import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [ReactiveFormsModule, NgClass],
  template: `
    <section id="contact" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl w-full">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Fala Comigo! 👋</h2>
          <p class="mt-2 text-lg text-gray-600">Me envie uma mensagem e retornarei em breve.</p>
        </div>

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="bg-white rounded-xl shadow-lg p-8">
          <div class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input 
                type="text" 
                id="name" 
                formControlName="name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                [ngClass]="{'border-red-500': contactForm.get('name')?.invalid && contactForm.get('name')?.touched}"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                formControlName="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                [ngClass]="{'border-red-500': contactForm.get('email')?.invalid && contactForm.get('email')?.touched}"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea 
                id="message" 
                formControlName="message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                [ngClass]="{'border-red-500': contactForm.get('message')?.invalid && contactForm.get('message')?.touched}"
              ></textarea>
            </div>

            <button 
              type="submit" 
              [disabled]="contactForm.invalid"
              class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // Add your form submission logic here
      this.contactForm.reset();
    }
  }
}