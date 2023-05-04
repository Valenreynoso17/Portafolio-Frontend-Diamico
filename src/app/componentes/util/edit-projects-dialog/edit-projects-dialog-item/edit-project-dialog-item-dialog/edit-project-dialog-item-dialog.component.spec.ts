import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectDialogItemDialogComponent } from './edit-project-dialog-item-dialog.component';

describe('EditProjectDialogItemDialogComponent', () => {
  let component: EditProjectDialogItemDialogComponent;
  let fixture: ComponentFixture<EditProjectDialogItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectDialogItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectDialogItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
