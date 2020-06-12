import { TestBed } from '@angular/core/testing';

import { WudermanTestService } from './wuderman-test.service';

describe('WudermanTestService', () => {
  let service: WudermanTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WudermanTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
