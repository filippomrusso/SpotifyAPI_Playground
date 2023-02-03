import { TestBed } from '@angular/core/testing';

import { SpotifyclientService } from './spotifyclient.service';

describe('SpotifyclientService', () => {
  let service: SpotifyclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
