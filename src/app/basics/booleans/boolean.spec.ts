import { userLogged } from './boolean';
xdescribe('Pruebas de booleans', () => {
  it('Debe retornar true', () => {
    const resp = userLogged();
    expect(resp).toBeTruthy();
  });
});
