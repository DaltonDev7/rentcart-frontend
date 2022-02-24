import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecetasComponent } from './add-recetas.component';

describe('AddRecetasComponent', () => {
  let component: AddRecetasComponent;
  let fixture: ComponentFixture<AddRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
