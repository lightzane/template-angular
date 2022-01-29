import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { MainComponent } from './main/main.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SNACKBAR_CONFIG } from './shared/constants/snackbar-config';
import { SampleDialogComponent } from './components/sample-dialog/sample-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DIALOG_CONFIG } from './shared/constants/dialog-config';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainComponent,
    SampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: SNACKBAR_CONFIG
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: DIALOG_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
