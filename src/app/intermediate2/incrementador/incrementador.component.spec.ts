import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

xdescribe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda y el progreso', () => {
      component.leyenda = 'Progreso de carga';
      // Necesitamos avisar al Spec que hay un cambio en el valor del campo leyenda
      fixture.detectChanges();
      // Agarro el elemento HTML a través del fixture que contiene la vista del IncrementadorComponent
      // La query nos devolverá el primer elemento h3 que encuentre
      const element: HTMLHtmlElement = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(element.innerHTML).toContain(component.leyenda);
    });

    it('Debe de mostrar en el input el valor del progreso', () => {
      component.cambiarValor(5);
      fixture.detectChanges();
      // La petición de cambios puede tardar un poco
      fixture.whenStable().then(
        () => {
          const element: any = fixture.debugElement.query(By.css('input')).nativeElement;
          expect(element.value).toBe('55');
        }
      );
    });

    it('Debe de incrementar/decrementar en 5 con un click de botón', () => {
      const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));
      // Obligamos a disparar un evento
      btns[0].triggerEventHandler('click', null);
      expect(component.progreso).toBe(45);
      btns[1].triggerEventHandler('click', null);
      expect(component.progreso).toBe(50);
    });

    it('En el título del componente, debe de mostrar el progreso', () => {
      const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));
      btns[0].triggerEventHandler('click', null);
      // Renderizamos el cambio del valor
      fixture.detectChanges();
      const element = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(element.innerHTML).toContain('45');
    });

});
