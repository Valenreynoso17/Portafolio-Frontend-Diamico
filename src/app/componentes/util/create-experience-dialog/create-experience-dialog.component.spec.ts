import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExperienceDialogComponent } from './create-experience-dialog.component';

describe('CreateExperienceDialogComponent', () => {
  let component: CreateExperienceDialogComponent;
  let fixture: ComponentFixture<CreateExperienceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExperienceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExperienceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
