import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Dashboard',
    title: 'Dashboard General',
    loadComponent: () =>
      import('./dashboard/pages/dashboard/dashboard.component'),
  },
  {
    path: 'Modulo Galpon',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'Dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./dashboard/pages/dashboard/dashboard.component'),
      },
      {
        path: 'Masters',
        title: 'Maestros',
        loadComponent: () =>
          import('./dashboard/pages/masters/masters.component'),
        children: [
          {
            path: 'Dashboard',
            title: 'Dashboard',
            loadComponent: () =>
              import('./dashboard/pages/dashboard/dashboard.component'),
          },
        ],
      },
    ],
  },
  {
    path: 'Modulo Bienestar Comun',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'Dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./dashboard/pages/dashboard/dashboard.component'),
      },
      {
        path: 'Masters',
        title: 'Maestros',
        loadComponent: () =>
          import('./dashboard/pages/masters/masters.component'),
      },
    ],
  },
  {
    path: 'Modulo-Psicologia',
    title: 'Modulo Psicologia',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'Dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./dashboard/pages/dashboard/dashboard.component'),
      },
      {
        path: 'Masters',
        title: 'Maestros',
        loadComponent: () =>
          import('./dashboard/pages/masters/masters.component'),
      },
      {
        path: '',
        redirectTo: 'Moduls',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/Dashboard',
    pathMatch: 'full',
  },
];
