import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditVehiculoComponent } from './add-or-edit-vehiculo.component';

describe('AddOrEditVehiculoComponent', () => {
  let component: AddOrEditVehiculoComponent;
  let fixture: ComponentFixture<AddOrEditVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
