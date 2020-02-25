import { Player } from './classes';
xdescribe('Pruebas de classes', () => {

  let player = new Player();

  /**
   * Dado que usamos un objeto común en todo el test, sus propiedades serán usadas en todos los
   * tests. Para evitarlo tenemos varios operadores para trabajar antes y después de los tests
   * en función del ciclo de vida del test.
   * BeforeAll -> Se ejecuta una vez antes de todas las pruebas
   * BeforeEach -> Se ejecuta antes de cada una de las pruebas
   * AfterAll -> Se ejecuta una vez después de todas las pruebas
   * AfterEach -> Se ejecuta una vez después de cada prueba
   */

  beforeAll(() => {
    console.log('BeforeAll');
  });
  beforeEach(() => {
    console.log('BeforeEach');
    player = new Player();
  });
  afterAll(() => {
    console.log('AfterAll');
  });
  afterEach(() => {
    console.log('AfterEach');
  });

  it('Debe retornar 80 de hp si le inflijo 20 de daño', () => {
    const resp = player.getsHurt(20);
    expect(resp).toBe(80);
  });
  it('Debe retornar 50 de hp si le inflijo 50 de daño', () => {
    const resp = player.getsHurt(50);
    expect(resp).toBe(50);
  });
  it('Debe retornar 0 de hp si le inflijo 100 de daño o más', () => {
    const resp = player.getsHurt(190);
    expect(resp).toBe(0);
  });
});
