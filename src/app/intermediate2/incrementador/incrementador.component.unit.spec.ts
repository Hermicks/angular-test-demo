import { IncrementadorComponent } from './incrementador.component';

xdescribe('Incrementador Component Unit', () => {

  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('El progreso no debe pasar del 100', () => {
    component.progreso = 50;
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });
});
