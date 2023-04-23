import { IMovable } from "../interfaces";
import { Vector } from "./vector";

class Move {
  private m: IMovable;

  constructor(m: IMovable) {
    this.m = m;
  }

  public execute(): void {
    this.m.setPosition(Vector.sum(this.m.getPosition(), this.m.getVelocity()));
  }
}

export { Move };
