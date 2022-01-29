import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { listAnim, slideIn } from '../../my-animations';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  animations: [listAnim, slideIn]
})
export class MainContentComponent implements OnInit {
  shown = false;
  items = [1, 2, 3];

  constructor(
    private readonly snackbar: MatSnackBar,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void { }

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

  toggle(): void {
    this.items = this.items.length ? [] : [1, 2, 3];
  }

}
