import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRecursoComponent } from './consulta-recurso.component';

describe('ConsultaRecursoComponent', () => {
  let component: ConsultaRecursoComponent;
  let fixture: ComponentFixture<ConsultaRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaRecursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
