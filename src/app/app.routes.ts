import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'builder',
    loadComponent: () =>
      import('./features/form-builder/form-builder/form-builder.component')
        .then(c => c.FormBuilderComponent)
  },
  {
    path: 'survey',
    loadComponent: () =>
      import('./features/form-renderer/form-renderer/form-renderer.component')
        .then(c => c.FormRendererComponent)
  },
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full'
  }
];
