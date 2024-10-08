import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasPersonajesComponent } from './cartas-personajes.component';

describe('CartasPersonajesComponent', () => {
  let component: CartasPersonajesComponent;
  let fixture: ComponentFixture<CartasPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasPersonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartasPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
