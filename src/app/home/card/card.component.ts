import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slideIn } from '../../my-animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [slideIn]
})
export class CardComponent implements OnInit {

  shown = false;

  constructor(
    private snackbar: MatSnackBar,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  copy(newClipboard: boolean): void {
    const suffix = newClipboard ? ' programatically...' : '';

    if (newClipboard) this.clipboard.copy('I was copied programatically');
    this.snackbar.open('Copied to clipboard' + suffix, 'WOW');
  }

}
