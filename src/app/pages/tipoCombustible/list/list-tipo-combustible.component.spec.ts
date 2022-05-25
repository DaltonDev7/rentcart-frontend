import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoCombustibleComponent } from './list-tipo-combustible.component';

describe('ListTipoCombustibleComponent', () => {
  let component: ListTipoCombustibleComponent;
  let fixture: ComponentFixture<ListTipoCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoCombustibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
