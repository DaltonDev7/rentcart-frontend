import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteRecetasComponent } from './ingrediente-recetas.component';

describe('IngredienteRecetasComponent', () => {
  let component: IngredienteRecetasComponent;
  let fixture: ComponentFixture<IngredienteRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
