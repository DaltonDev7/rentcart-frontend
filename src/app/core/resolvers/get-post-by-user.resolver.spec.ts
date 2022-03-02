import { TestBed } from '@angular/core/testing';

import { GetPostByUserResolver } from './get-post-by-user.resolver';

describe('GetPostByUserResolver', () => {
  let resolver: GetPostByUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetPostByUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
