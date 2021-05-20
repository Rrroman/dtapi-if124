import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsVComponent } from './subjects-v.component';

describe('SubjectsVComponent', () => {
  let component: SubjectsVComponent;
  let fixture: ComponentFixture<SubjectsVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectsVComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
