import { TestBed } from '@angular/core/testing';

import { AccutextService } from './accutext.service';

describe('AcctextService', () => {
  let service: AccutextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccutextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
