/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestserviceService } from './testservice.service';

describe('Service: Testservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestserviceService]
    });
  });

  it('should ...', inject([TestserviceService], (service: TestserviceService) => {
    expect(service).toBeTruthy();
  }));
});
