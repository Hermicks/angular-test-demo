// Para decirle a Angular que necesitamos hacer pruebas de integración y poder trabajar con pipes,
// directivas, vistas y distintos componentes de Angular, tenemos que importar TesteBed
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';

describe('Pruebas para DoctorComponent', () => {

  let doctorComponent: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    // Configuramos el testBed. La configuración es la misma que la de un módulo, con los componentes
    // que queremos probar, sus servicios si hicieran falta y sus módulos tambien si los necesitase
    TestBed.configureTestingModule({
      declarations: [
        DoctorComponent
      ],
      // Servicios que utiliza el componente
      providers: [
        DoctorService
      ],
      // Módulos que importa el componente para poder trabajar
      imports: [
        HttpClientModule
      ]
    });
    /**
     * Generamos el componente que queremos probar con TestBed pudiendo acceder a todos sus elementos
     * como ComponentFixture. Este nos permite, por ejemplo, acceder a los elementos del DOM de la vista
     * del componente como nos permite JQuery
     */
    fixture = TestBed.createComponent(DoctorComponent);
    /**
     * Una vez tenemos el fixture, ya podemos instanciar la variable de la clase Doctor y acceder
     * a todos sus elementos, DOM, ciclos de vida...
     */
    doctorComponent = fixture.componentInstance;
  });
  it('Debe crearse el component', () => {
    expect(doctorComponent).toBeTruthy();
  });
  it('Debe de retornar el nombre del médico', () => {
    const name = 'Juan García';
    const resp = doctorComponent.hi(name);
    expect(resp).toContain(name);
  });
});
