import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, description: string; }
  ) { }

  get title(): AbstractControl {
    return this.sampleForm.get('title');
  }

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      title: [this.data.title || '', Validators.pattern(/^[A-Za-z\s]+$/)],
      description: [this.data.description || '']
    });
    // to allow mat-errors to display immediately on first time input 
    this.sampleForm.markAllAsTouched();
  }

  // Alternative 2
  // submitDialog(): void {
  //   this.dialogRef.close(this.sampleForm.value);
  // }

}
