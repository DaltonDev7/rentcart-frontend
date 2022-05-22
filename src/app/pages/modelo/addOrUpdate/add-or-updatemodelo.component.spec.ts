import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdatemodeloComponent } from './add-or-updatemodelo.component';

describe('AddOrUpdatemodeloComponent', () => {
  let component: AddOrUpdatemodeloComponent;
  let fixture: ComponentFixture<AddOrUpdatemodeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdatemodeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdatemodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
