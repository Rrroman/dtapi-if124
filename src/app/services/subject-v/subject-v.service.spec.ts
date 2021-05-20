import { TestBed } from '@angular/core/testing';

import { SubjectVService } from './subject-v.service';

describe('SubjectVService', () => {
  let service: SubjectVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
