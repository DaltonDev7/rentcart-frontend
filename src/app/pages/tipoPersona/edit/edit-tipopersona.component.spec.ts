import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipopersonaComponent } from './edit-tipopersona.component';

describe('EditTipopersonaComponent', () => {
  let component: EditTipopersonaComponent;
  let fixture: ComponentFixture<EditTipopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipopersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
