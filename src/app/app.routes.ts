import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/sobre', pathMatch: 'full' },
  { path: 'sobre', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'projetos', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'contato', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) }
];
