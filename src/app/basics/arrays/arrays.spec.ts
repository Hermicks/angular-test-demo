import { getRobots } from './arrays';
xdescribe('Pruebas de arreglos', () => {
  it('Debe de retornar al menos tres robots', () => {
    const resp = getRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe de contener a Ultrón y Megaman', () => {
    const resp = getRobots();
    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  });
});
