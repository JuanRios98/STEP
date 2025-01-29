import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProyectoComponent } from './consulta-proyecto.component';

describe('ConsultaProyectoComponent', () => {
  let component: ConsultaProyectoComponent;
  let fixture: ComponentFixture<ConsultaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaProyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
