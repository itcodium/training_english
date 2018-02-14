import { TestBed, inject } from '@angular/core/testing';

import { EnglishService } from './english.service';

describe('EnglishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnglishService]
    });
  });

  it('should be created', inject([EnglishService], (service: EnglishService) => {
    expect(service).toBeTruthy();
  }));
});
