import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { listAnim, slideIn } from '../../my-animations';
import { SampleDialogComponent } from '../dialogs/sample-dialog/sample-dialog.component';

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
    private readonly dialog: MatDialog,
    private readonly clipboard: Clipboard
  ) { }

  ngOnInit(): void { }

  copy(newClipboard: boolean): void {
    const suffix = newClipboard ? ' programatically...' : '';

    if (newClipboard) this.clipboard.copy('I was copied programatically');
    this.snackbar.open('Copied to clipboard' + suffix, 'WOW');
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

  toggle(): void {
    this.items = this.items.length ? [] : [1, 2, 3];
  }

}
