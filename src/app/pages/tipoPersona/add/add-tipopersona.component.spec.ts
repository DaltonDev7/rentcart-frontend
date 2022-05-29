import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipopersonaComponent } from './add-tipopersona.component';

describe('AddTipopersonaComponent', () => {
  let component: AddTipopersonaComponent;
  let fixture: ComponentFixture<AddTipopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipopersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
