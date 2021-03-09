import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'confirm-payment-modal',
    loadChildren: () => import('./pages/modal/confirm-payment-modal/confirm-payment-modal.module').then( m => m.ConfirmPaymentModalPageModule)
  },
  {
    path: 'confirm-exit',
    loadChildren: () => import('./pages/modal/confirm-exit/confirm-exit.module').then( m => m.ConfirmExitPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./pages/historic/historic.module').then( m => m.HistoricPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
