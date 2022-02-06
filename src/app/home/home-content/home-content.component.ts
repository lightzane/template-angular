import { Component, OnInit } from '@angular/core';
import { listAnim, slideIn } from '../../my-animations';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  animations: [listAnim, slideIn]
})
export class HomeContentComponent implements OnInit {
  shown = false;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isNgContainerDisplayed = true;

  constructor() { }

  ngOnInit(): void { }

  toggle(): void {
    this.items = this.items.length ? [] : [1, 2, 3];
  }

}
