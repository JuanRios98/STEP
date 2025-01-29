import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaUsuarioComponent } from './ca-usuario.component';

describe('CaUsuarioComponent', () => {
  let component: CaUsuarioComponent;
  let fixture: ComponentFixture<CaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
