import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpEduItemComponent } from './exp-edu-item.component';

describe('ExpEduItemComponent', () => {
  let component: ExpEduItemComponent;
  let fixture: ComponentFixture<ExpEduItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpEduItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpEduItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
