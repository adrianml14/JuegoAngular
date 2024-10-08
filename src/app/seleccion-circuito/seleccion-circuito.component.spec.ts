import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCircuitoComponent } from './seleccion-circuito.component';


describe('SeleccionCircuitoComponent', () => {
  let component: SeleccionCircuitoComponent;
  let fixture: ComponentFixture<SeleccionCircuitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionCircuitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionCircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
