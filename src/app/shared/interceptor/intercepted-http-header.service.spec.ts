import { TestBed } from '@angular/core/testing';

import { InterceptedHttpHeaderService } from './intercepted-http-header.service';

describe('InterceptedHttpHeaderService', () => {
  let service: InterceptedHttpHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptedHttpHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
