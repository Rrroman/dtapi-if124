import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsRComponent } from './subjects-r.component';

describe('SubjectsRComponent', () => {
  let component: SubjectsRComponent;
  let fixture: ComponentFixture<SubjectsRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectsRComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
