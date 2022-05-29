import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditTipoVehiculoComponent } from './add-or-edit-tipo-vehiculo.component';

describe('AddOrEditTipoVehiculoComponent', () => {
  let component: AddOrEditTipoVehiculoComponent;
  let fixture: ComponentFixture<AddOrEditTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
