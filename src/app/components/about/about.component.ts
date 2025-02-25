import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer focused on creating innovative solutions through code. 
        With expertise in modern web technologies, I love turning ideas into reality and 
        building user-friendly applications that make a difference.
      </p>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class AboutComponent {}
