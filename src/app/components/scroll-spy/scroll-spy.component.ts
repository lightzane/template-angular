import { Component, QueryList, ElementRef, ContentChildren, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrls: ['./scroll-spy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollSpyComponent {

  @ContentChildren('scrollSpy') sections: QueryList<ElementRef<HTMLElement>>;
  /** Emits the name of the current section */
  @Output() sectionChange = new EventEmitter<string>();

  constructor() {
    fromEvent(document, 'scroll').subscribe(() => {
      for (let section of this.sections) {
        const top = window.scrollY;
        const offset = section.nativeElement.offsetTop;
        const height = section.nativeElement.offsetHeight;
        const id = section.nativeElement.getAttribute('id');

        // if (top >= offset && top < offset + height) {
        //   this.currentSection = id;
        // }

        if (top >= offset - (height / 5) && top < offset + height) {
          this.sectionChange.emit(id);
        }
      }
    });
  }
}
