import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperienceDialogItemComponent } from './edit-experience-dialog-item.component';

describe('EditExperienceDialogItemComponent', () => {
  let component: EditExperienceDialogItemComponent;
  let fixture: ComponentFixture<EditExperienceDialogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperienceDialogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExperienceDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
