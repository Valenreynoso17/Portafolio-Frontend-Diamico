import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKnowledgeDialogComponent } from './edit-knowledge-dialog.component';

describe('EditKnowledgeDialogComponent', () => {
  let component: EditKnowledgeDialogComponent;
  let fixture: ComponentFixture<EditKnowledgeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKnowledgeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditKnowledgeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
