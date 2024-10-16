import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vista-cliente',
    loadChildren: () => import('./vista-cliente/vista-cliente.module').then( m => m.VistaClientePageModule),
    canActivate:[authGuard]
  },
  {
    path: 'vista-conductor',
    loadChildren: () => import('./vista-conductor/vista-conductor.module').then( m => m.VistaConductorPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
