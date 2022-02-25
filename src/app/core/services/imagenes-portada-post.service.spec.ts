import { TestBed } from '@angular/core/testing';

import { ImagenesPortadaPostService } from './imagenes-portada-post.service';

describe('ImagenesPortadaPostService', () => {
  let service: ImagenesPortadaPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesPortadaPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
