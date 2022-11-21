import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCargosComponent } from './new-cargos.component';

describe('NewCargosComponent', () => {
  let component: NewCargosComponent;
  let fixture: ComponentFixture<NewCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCargosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
