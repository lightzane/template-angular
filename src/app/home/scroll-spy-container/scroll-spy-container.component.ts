import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scroll-spy-container',
  templateUrl: './scroll-spy-container.component.html',
  styleUrls: ['./scroll-spy-container.component.scss']
})
export class ScrollSpyContainerComponent implements OnInit, AfterViewInit {

  currentSection: string;
  lorems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // To enable Angular scroll into view on page load and on link-anchor clicks
    this.route.fragment.subscribe((f) => {
      const el = document.querySelector(`#${f}`);
      if (el) {
        el.scrollIntoView();
      }
    });

    // You may notice inaccurate in scrollIntoView()
    // This is because of the sidenav
    // When it pushed the sidenav-content, the width gets lesser
    // and the paragraph content is adjusting which also changes the scroll

  }

  /**
   * Listen to sectionChange event and catches name of the current section
   * @param sectionName 
   */
  updateCurrentSection(sectionName: string) {
    this.currentSection = sectionName;
  }

}
