import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperienceDialogItemDialogComponent } from './edit-experience-dialog-item-dialog.component';

describe('EditExperienceDialogItemDialogComponent', () => {
  let component: EditExperienceDialogItemDialogComponent;
  let fixture: ComponentFixture<EditExperienceDialogItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperienceDialogItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExperienceDialogItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
