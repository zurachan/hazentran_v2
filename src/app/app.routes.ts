import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Project } from './pages/project/project';

export const routes: Routes = [
  { path: '', component: Project },
  { path: 'contact', component: Contact },
];
