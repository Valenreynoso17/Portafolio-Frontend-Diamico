import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperiencieDialogComponent } from './edit-experiencie-dialog.component';

describe('EditExperiencieDialogComponent', () => {
  let component: EditExperiencieDialogComponent;
  let fixture: ComponentFixture<EditExperiencieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperiencieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExperiencieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
