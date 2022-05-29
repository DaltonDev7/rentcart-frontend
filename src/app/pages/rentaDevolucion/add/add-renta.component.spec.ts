import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentaComponent } from './add-renta.component';

describe('AddRentaComponent', () => {
  let component: AddRentaComponent;
  let fixture: ComponentFixture<AddRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
