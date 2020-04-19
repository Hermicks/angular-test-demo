import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un link a la página de médicos', () => {
    // Evaluamos si existen un link a la ruta de médicos
    const debugElements: any[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let exists: boolean = false;
    for ( const element of  debugElements) {
      if ( element.attributes['routerLink'] === '/medicos') {
        exists = true;
        break;
      }
    }
    expect(exists).toBeTruthy();
  });
});
