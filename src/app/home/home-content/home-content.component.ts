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
  items = [1, 2, 3];

  constructor() { }

  ngOnInit(): void { }

  toggle(): void {
    this.items = this.items.length ? [] : [1, 2, 3];
  }

}
