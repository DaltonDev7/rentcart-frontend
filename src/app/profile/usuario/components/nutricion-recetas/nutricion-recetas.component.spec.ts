import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionRecetasComponent } from './nutricion-recetas.component';

describe('NutricionRecetasComponent', () => {
  let component: NutricionRecetasComponent;
  let fixture: ComponentFixture<NutricionRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutricionRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
