import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosRecetasComponent } from './pasos-recetas.component';

describe('PasosRecetasComponent', () => {
  let component: PasosRecetasComponent;
  let fixture: ComponentFixture<PasosRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasosRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
