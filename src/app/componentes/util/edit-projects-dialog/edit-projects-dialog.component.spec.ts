import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectsDialogComponent } from './edit-projects-dialog.component';

describe('EditProjectsDialogComponent', () => {
  let component: EditProjectsDialogComponent;
  let fixture: ComponentFixture<EditProjectsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
