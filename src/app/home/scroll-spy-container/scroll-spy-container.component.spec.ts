import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSpyContainerComponent } from './scroll-spy-container.component';

describe('ScrollSpyContainerComponent', () => {
  let component: ScrollSpyContainerComponent;
  let fixture: ComponentFixture<ScrollSpyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollSpyContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSpyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
