import { TestBed } from '@angular/core/testing';

import { AuthorSService } from './author-s.service';

describe('AuthorSService', () => {
  let service: AuthorSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
