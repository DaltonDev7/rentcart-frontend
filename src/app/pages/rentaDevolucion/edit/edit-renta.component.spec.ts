import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRentaComponent } from './edit-renta.component';

describe('EditRentaComponent', () => {
  let component: EditRentaComponent;
  let fixture: ComponentFixture<EditRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
