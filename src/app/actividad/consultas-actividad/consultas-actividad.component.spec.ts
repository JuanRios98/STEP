import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasActividadComponent } from './consultas-actividad.component';

describe('ConsultasActividadComponent', () => {
  let component: ConsultasActividadComponent;
  let fixture: ComponentFixture<ConsultasActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultasActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultasActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
