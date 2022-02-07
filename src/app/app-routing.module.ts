import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home-content/home-content.module').then(m => m.HomeContentModule),
        pathMatch: 'full'
      },
      {
        path: 'card',
        loadChildren: () => import('./home/card/card.module').then(m => m.CardModule)
      },
      {
        path: 'example',
        loadChildren: () => import('./home/example/example.module').then(m => m.ExampleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
