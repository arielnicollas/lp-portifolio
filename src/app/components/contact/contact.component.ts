import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact-section">
      <h2>Contact Me</h2>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input 
            id="name" 
            type="text" 
            formControlName="name"
            required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            id="email" 
            type="email" 
            formControlName="email"
            required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea 
            id="message" 
            formControlName="message"
            required></textarea>
        </div>
        <button type="submit" [disabled]="!contactForm.valid">Send Message</button>
      </form>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    input, textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 0.8rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    button:disabled {
      background: #cccccc;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission logic here
    }
  }
}
