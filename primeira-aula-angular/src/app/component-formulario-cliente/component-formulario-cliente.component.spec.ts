import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormularioClienteComponent } from './component-formulario-cliente.component';

describe('ComponentFormularioClienteComponent', () => {
  let component: ComponentFormularioClienteComponent;
  let fixture: ComponentFixture<ComponentFormularioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentFormularioClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentFormularioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
