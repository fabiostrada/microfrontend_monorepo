import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './components/home-shell/home-shell.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeShellComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => 
      loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4000/remoteEntry.js',
          exposedModule: './Module'
      }).then(m => m.AppModule)   
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.AppModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
