import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInspeccionComponent } from './list-inspeccion.component';

describe('ListInspeccionComponent', () => {
  let component: ListInspeccionComponent;
  let fixture: ComponentFixture<ListInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInspeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
