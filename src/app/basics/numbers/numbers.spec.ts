import { increase } from './numbers';

xdescribe('Pruebas de numeros', () => {
  it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {
    const resp = increase(101);
    expect(resp).toBe(100);
  });
  it('Debe retornar numero ingresado + 1 si el numero ingresado es menor a 100', () => {
    const resp = increase(89);
    expect(resp).toBe(90);
  });
});
