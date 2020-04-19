import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

class FakeRouter {
  navigate( params ) {}
}

class FakeActivatedRoute {
  // Creamos un Observale fake y lo inicializamos vacío
  // params: Observable<any> = EMPTY;
  // Propiedad para manejar observables
  private subject: Subject<any> = new Subject();

  get params() {
    return this.subject.asObservable();
  }

  push(value) {
    this.subject.next(value);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        // Le digo a mi spec que cambie la clase Router de Angular por la que yo he creado
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar a médico cuando se guarde', () => {
    const router: FakeRouter = TestBed.get(Router);
    // Simulamos la llamada a la función navigate del Router, que no hace nada en nuestro caso
    const spy = spyOn( router, 'navigate');
    component.guardarMedico();
    // Comprobamos que el método haya sido llamado
    expect( spy ).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe colocar el id como nuevo', () => {
    component = fixture.componentInstance;
    const fakeActivatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    fakeActivatedRoute.push( { id: 'nuevo' });
    expect(component.id).toBe('nuevo');
  });
});
