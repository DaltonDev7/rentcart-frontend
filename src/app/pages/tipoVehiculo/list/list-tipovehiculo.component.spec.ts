import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipovehiculoComponent } from './list-tipovehiculo.component';

describe('ListTipovehiculoComponent', () => {
  let component: ListTipovehiculoComponent;
  let fixture: ComponentFixture<ListTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipovehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
