import { TestBed } from '@angular/core/testing';

import { SubjectsRService } from './subjects-r.service';

describe('SubjectsRService', () => {
  let service: SubjectsRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
