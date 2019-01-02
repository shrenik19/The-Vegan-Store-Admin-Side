import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbillComponent } from './totalbill.component';

describe('TotalbillComponent', () => {
  let component: TotalbillComponent;
  let fixture: ComponentFixture<TotalbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
