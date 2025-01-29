import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaRecursoComponent } from './ca-recurso.component';

describe('CaRecursoComponent', () => {
  let component: CaRecursoComponent;
  let fixture: ComponentFixture<CaRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaRecursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
