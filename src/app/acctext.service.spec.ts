import { TestBed } from '@angular/core/testing';

import { AcctextService } from './acctext.service';

describe('AcctextService', () => {
  let service: AcctextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcctextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
