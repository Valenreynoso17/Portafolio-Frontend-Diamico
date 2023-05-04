import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectsDialogItemComponent } from './edit-projects-dialog-item.component';

describe('EditProjectsDialogItemComponent', () => {
  let component: EditProjectsDialogItemComponent;
  let fixture: ComponentFixture<EditProjectsDialogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectsDialogItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectsDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
