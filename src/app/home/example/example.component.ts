import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SampleDialogComponent } from '../../components/dialogs/sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    const dialogRef = this.dialog.open(SampleDialogComponent, {
      data: {
        title: 'Sample title',
        description: 'Sample description is placed here'
      }
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) alert(JSON.stringify(data, null, 4));
    });
  }

  showSnackbar(): void {
    this.snackbar.open('Here I am', 'NICE');
  }

}
