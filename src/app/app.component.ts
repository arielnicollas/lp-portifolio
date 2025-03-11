import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from "./components/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  standalone: true,
  providers: [TranslateService],
  imports: [AboutComponent, ProjectsComponent, ContactComponent, HeaderComponent, TranslateModule],
  template: `
    <div class="app">
    <app-header />
      <app-about />
      <app-projects />
      <app-contact />
      
    </div>
  `
})
export class AppComponent {
  
}
