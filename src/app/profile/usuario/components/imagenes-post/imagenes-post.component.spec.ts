import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesPostComponent } from './imagenes-post.component';

describe('ImagenesPostComponent', () => {
  let component: ImagenesPostComponent;
  let fixture: ComponentFixture<ImagenesPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
