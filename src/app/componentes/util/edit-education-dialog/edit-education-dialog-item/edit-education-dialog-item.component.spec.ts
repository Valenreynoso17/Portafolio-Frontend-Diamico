import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationDialogItemComponent } from './edit-education-dialog-item.component';

describe('EditEducationDialogItemComponent', () => {
  let component: EditEducationDialogItemComponent;
  let fixture: ComponentFixture<EditEducationDialogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationDialogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
