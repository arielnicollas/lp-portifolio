import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { LanguageSwitcherService } from '../../language-switcher/language-switcher.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LanguageSwitcherComponent, TranslatePipe],
  template: `
    <header class="header">
      <nav class="nav-container">

      <div class="logo-container">
        <div class="logo" (click)="languageSwitcherService.switchLanguage('pt')" style="cursor: pointer">
          <img src="../../../assets/imgs/brazil.png" alt="Logo">
        </div>

        <div class="logo" (click)="languageSwitcherService.switchLanguage('en')" style="cursor: pointer">
          <img src="../../../assets/imgs/eua.png" alt="Logo">
        </div>
      </div>
      
        <ul class="nav-links font-medium ">
          <li>
            <a (click)="scrollToSection('about') " class="cursor-pointer">{{'HEADER.ABOUT' | translate}} </a>
          </li>
          <li>
            <a (click)="scrollToSection('projects')" class="cursor-pointer">{{'HEADER.PROJECTS' | translate}} </a>
          </li>
          <li>
            <a (click)="scrollToSection('contact')" class="cursor-pointer">{{'HEADER.CONTACT' | translate}} </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin: 0;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: #007bff;
    }

    .nav-links a.active {
      color: #007bff;
      border-bottom: 2px solid #007bff;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {

  constructor(
    public languageSwitcherService: LanguageSwitcherService,
  ) {}
  



  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}