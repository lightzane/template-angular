import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isDark: boolean;
  isHandset$: Observable<boolean>;

  /** utility for sidenav */
  isHandset: boolean;
  /** utility for sidenav */
  isFullWidth: boolean = false;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer
  ) {

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((bp) => bp.matches),
        tap((isHandset) => { this.isHandset = this.isFullWidth = isHandset; }),
        shareReplay(1) // share only the last boolean value
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

  closeSidenav(): void {
    if (this.isHandset) {
      this.sidenav.toggle();
    } else {
      this.isFullWidth = false;
    }
  }

  customToggleSidenav(): void {
    if (this.isHandset) {
      this.sidenav.toggle();
    } else {
      this.isFullWidth = !this.isFullWidth;
    }
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyDarkDialog();
  }

}
