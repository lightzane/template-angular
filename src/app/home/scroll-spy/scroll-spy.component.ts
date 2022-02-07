import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrls: ['./scroll-spy.component.scss']
})
export class ScrollSpyComponent implements OnInit, AfterViewInit {

  @ViewChildren('scrollSpy') sections: QueryList<ElementRef<HTMLElement>>;
  currentSection: string;

  lorems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute) {
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
          // ? divide by 5
          // --> see scroll-spy.component.scss // section { scroll-margin-top: 5rem }
          this.currentSection = id;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // To enable Angular scroll into view on page load and on link-anchor clicks
    this.route.fragment.subscribe((f) => {
      const el = document.querySelector(`#${f}`);
      if (el) {
        el.scrollIntoView();
      }
    });

  }

}
