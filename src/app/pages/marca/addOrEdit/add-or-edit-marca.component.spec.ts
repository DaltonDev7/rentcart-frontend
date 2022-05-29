import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditMarcaComponent } from './add-or-edit-marca.component';

describe('AddOrEditMarcaComponent', () => {
  let component: AddOrEditMarcaComponent;
  let fixture: ComponentFixture<AddOrEditMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
