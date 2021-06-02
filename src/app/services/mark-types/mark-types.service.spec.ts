import { TestBed } from '@angular/core/testing';

import { MarkTypesService } from './mark-types.service';

describe('MarkTypesService', () => {
  let service: MarkTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
