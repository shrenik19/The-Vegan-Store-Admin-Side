import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductreminderComponent } from './productreminder.component';

describe('ProductreminderComponent', () => {
  let component: ProductreminderComponent;
  let fixture: ComponentFixture<ProductreminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductreminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
