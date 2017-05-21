/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BioService } from './bio.service';

describe('Service: Bio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BioService]
    });
  });

  it('should ...', inject([BioService], (service: BioService) => {
    expect(service).toBeTruthy();
  }));
});