import { Player2 } from './player2';

xdescribe('Player 2 Emitter', () => {
  let player2: Player2;

  beforeEach(() => {
    player2 = new Player2();
  });

  it('Debe emitir un evento cuando recibe daño', () => {
    let newHp = 0;
    // Nos subscribimos al evento pero sin dispararlo. Solo nos subscribimos a la llamada
    // Tenemos que llamar al método
    player2.hpChanges.subscribe(
      (hp) => {
        newHp = hp;
      }
    );
    player2.getsHurt(1000);
    expect(newHp).toBe(0);
  });
  it('Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 50', () => {
    let newHp = 0;
    // Nos subscribimos al evento pero sin dispararlo. Solo nos subscribimos a la llamada
    // Tenemos que llamar al método
    player2.hpChanges.subscribe(
      (hp) => {
        newHp = hp;
      }
    );
    player2.getsHurt(50);
    expect(newHp).toBe(50);
  });
});
