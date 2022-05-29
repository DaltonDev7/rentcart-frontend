import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditTipoCombustibleComponent } from './add-or-edit-tipo-combustible.component';

describe('AddOrEditTipoCombustibleComponent', () => {
  let component: AddOrEditTipoCombustibleComponent;
  let fixture: ComponentFixture<AddOrEditTipoCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditTipoCombustibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditTipoCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
