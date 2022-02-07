import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SampleDialogComponent } from '../../components/dialogs/sample-dialog/sample-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from '../../components/sample/sample.component';
import { MyHighlightOnHoverDirective } from '../../shared/directives/my-highlight-on-hover.directive';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent
  }
];

@NgModule({
  declarations: [
    ExampleComponent,
    SampleDialogComponent,
    SampleComponent,
    MyHighlightOnHoverDirective // my custom directive
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExampleModule { }
