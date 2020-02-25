import { message } from './string';
// Las pruebas se dividen en dos partes generales
// Describe -> Lo usamos para agrupar pruebas
// describe('Pruebas de Strings');
// It -> es una prueba en sí
// it('Debe de regresar un string');
// it('Debe de contener un nombre');
xdescribe('Pruebas de strings', () => {
  it('Debe devolver un string', () => {
    // Llamamos a la función que vamos a probar
    const resp = message('Pablo Hermida');
    // Confirmamos si la instrucción ha sido exitosa
    // Esperamos que el tipo de nuestra respuesta sea string
    expect(typeof resp).toBe('string');
  });
  it('Debe contener un nombre', () => {
    const name = 'Pablo Hermida';
    const resp = message(name);
    expect(resp).toContain(name);
  });
});
