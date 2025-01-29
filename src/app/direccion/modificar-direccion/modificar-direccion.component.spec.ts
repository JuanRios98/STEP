import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDireccionComponent } from './modificar-direccion.component';

describe('ModificarDireccionComponent', () => {
  let component: ModificarDireccionComponent;
  let fixture: ComponentFixture<ModificarDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarDireccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
