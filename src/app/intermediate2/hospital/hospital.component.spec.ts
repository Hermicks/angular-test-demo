import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

xdescribe('Pruebas para HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {
    // No es necesario trabajar de manera asíncrona
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    // No es necesaria la compilación de módulo
    // .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });
    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    // Dispara el ciclo de detección de cambios de Angular
    fixture.detectChanges();
  });

  it('Debe crear un hospital component', () => {
    expect(component).toBeTruthy();
  });
});
