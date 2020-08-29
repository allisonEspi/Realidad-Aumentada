import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard"
import { NologinGuard } from "./guards/nologin.guard"

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    canActivate: [AuthGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    canActivate:[NologinGuard],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'favoritos',
    canActivate: [AuthGuard],
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'escanner',
    canActivate: [AuthGuard],
    loadChildren: () => import('./escanner/escanner.module').then( m => m.EscannerPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'notificaciones',
    canActivate: [AuthGuard],
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
