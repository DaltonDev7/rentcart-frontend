import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipopersonaComponent } from './list-tipopersona.component';

describe('ListTipopersonaComponent', () => {
  let component: ListTipopersonaComponent;
  let fixture: ComponentFixture<ListTipopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipopersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
