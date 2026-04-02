import { TestBed } from '@angular/core/testing';

import { Mural } from './mural';

describe('Mural', () => {
  let service: Mural;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mural);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
