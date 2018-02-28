import { TestBed, inject } from '@angular/core/testing';

import { ServiceTryService } from './service-try.service';

describe('ServiceTryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceTryService]
    });
  });

  it('should be created', inject([ServiceTryService], (service: ServiceTryService) => {
    expect(service).toBeTruthy();
  }));
});
