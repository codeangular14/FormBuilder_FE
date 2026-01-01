import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'builder',
    loadComponent: () =>
      import('./form-builder/form-builder/form-builder')
        .then(c => c.FormBuilderComponent)
  },
  {
    path: 'survey',
    loadComponent: () =>
      import('./form-renderer/form-renderer/form-renderer')
        .then(c => c.FormRendererComponent)
  },
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full'
  }
];
