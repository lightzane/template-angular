import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss'],
})
export class SampleDialogComponent implements OnInit {

  sampleForm: FormGroup;

  constructor(
    // private dialogRef: MatDialogRef<SampleDialogComponent>,
    private fb: FormBuilder
  ) {
    this.sampleForm = this.fb.group({
      title: ['', Validators.pattern(/^[A-Za-z\s]+$/)],
      description: ['']
    });
    // to allow mat-errors to display immediately on first time input 
    this.sampleForm.markAllAsTouched();
  }

  get title(): AbstractControl {
    return this.sampleForm.get('title');
  }

  ngOnInit(): void {
  }

  // Alternative 2
  // submitDialog(): void {
  //   this.dialogRef.close(this.sampleForm.value);
  // }

}
