import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },

  {
    path: 'builder',
    loadChildren: () =>
      import('./features/form-builder/form-builder/form-builder.routes').then(m => m.FORM_BUILDER_ROUTES)
  },

  {
    path: 'survey',
    loadChildren: () =>
      import('./features/form-renderer/form-renderer/form-renderer.routes').then(m => m.FORM_RENDERER_ROUTES)
  },
  {
    path: 'user-list',
    loadComponent: () =>
      import('./features/user-management/user-list/user-list.component')
        .then(c => c.UserListComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
