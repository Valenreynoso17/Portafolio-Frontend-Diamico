import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoContactDialogComponent } from './main-info-contact-dialog.component';

describe('MainInfoContactDialogComponent', () => {
  let component: MainInfoContactDialogComponent;
  let fixture: ComponentFixture<MainInfoContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfoContactDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
