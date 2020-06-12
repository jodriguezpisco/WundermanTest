import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoServiciosComponent } from './consumo-servicios.component';

describe('ConsumoServiciosComponent', () => {
  let component: ConsumoServiciosComponent;
  let fixture: ComponentFixture<ConsumoServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
