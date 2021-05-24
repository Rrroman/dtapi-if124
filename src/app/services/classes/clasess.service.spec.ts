import { TestBed } from '@angular/core/testing';

import { ClasessService } from './clasess.service';

describe('ClasessService', () => {
  let service: ClasessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
