import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKnowledgeDialogComponent } from './create-knowledge-dialog.component';

describe('CreateKnowledgeDialogComponent', () => {
  let component: CreateKnowledgeDialogComponent;
  let fixture: ComponentFixture<CreateKnowledgeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKnowledgeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateKnowledgeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
