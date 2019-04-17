import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdouComponent } from './chartdou.component';

describe('ChartdouComponent', () => {
  let component: ChartdouComponent;
  let fixture: ComponentFixture<ChartdouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartdouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
