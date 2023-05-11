import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationDialogItemDialogComponent } from './edit-education-dialog-item-dialog.component';

describe('EditEducationDialogItemDialogComponent', () => {
  let component: EditEducationDialogItemDialogComponent;
  let fixture: ComponentFixture<EditEducationDialogItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationDialogItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationDialogItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
