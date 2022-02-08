import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyContainerComponent } from './scroll-spy-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ScrollSpyComponent } from '../../components/scroll-spy/scroll-spy.component';

const routes: Routes = [
  {
    path: '',
    component: ScrollSpyContainerComponent
  }
];

@NgModule({
  declarations: [
    ScrollSpyContainerComponent,
    ScrollSpyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule
  ]
})
export class ScrollSpyContainerModule { }
