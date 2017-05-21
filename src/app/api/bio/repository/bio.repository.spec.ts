/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Bio.repositoryService } from './bio.repository.service';

describe('Service: Bio.repository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Bio.repositoryService]
    });
  });

  it('should ...', inject([Bio.repositoryService], (service: Bio.repositoryService) => {
    expect(service).toBeTruthy();
  }));
});