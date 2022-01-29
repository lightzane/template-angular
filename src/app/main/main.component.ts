import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  isDark: boolean;
  isHandset$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer
  ) {

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((bp) => bp.matches),
        shareReplay()
      );

    const theme = localStorage.getItem('theme');
    this.isDark = theme === 'dark' ? true : false;
  }

  ngOnInit(): void {
    this.applyDarkDialog();
  }

  /**
   * Apply dark theme to mat-dialog components
   * And also save `dark` to localStorage
   */
  applyDarkDialog(): void {
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyDarkDialog();
  }

}
