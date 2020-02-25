import { EventEmitter } from '@angular/core';

export class Player2 {

  hp: number;
  hpChanges: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  getsHurt(damage: number): void {
    if (damage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= damage;
    }
    this.hpChanges.emit(this.hp);
  }
}
