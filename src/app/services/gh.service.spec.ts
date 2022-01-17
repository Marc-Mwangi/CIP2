import { TestBed } from '@angular/core/testing';

import { GHService } from './gh.service';

describe('GHService', () => {
  let service: GHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
