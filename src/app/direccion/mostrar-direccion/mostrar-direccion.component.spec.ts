import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDireccionComponent } from './mostrar-direccion.component';

describe('MostrarDireccionComponent', () => {
  let component: MostrarDireccionComponent;
  let fixture: ComponentFixture<MostrarDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarDireccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
