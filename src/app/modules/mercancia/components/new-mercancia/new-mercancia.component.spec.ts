import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMercanciaComponent } from './new-mercancia.component';

describe('NewMercanciaComponent', () => {
  let component: NewMercanciaComponent;
  let fixture: ComponentFixture<NewMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMercanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
