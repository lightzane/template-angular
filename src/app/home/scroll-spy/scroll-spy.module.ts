import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyComponent } from './scroll-spy.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: ScrollSpyComponent
  }
];

@NgModule({
  declarations: [
    ScrollSpyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule
  ]
})
export class ScrollSpyModule { }
