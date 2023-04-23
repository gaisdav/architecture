import { ICommand, IMovable } from "../interfaces";
import { Vector } from "../helpers";

class MoveCommand implements ICommand {
  private m: IMovable;

  constructor(m: IMovable) {
    this.m = m;
  }

  public execute(): void {
    this.m.setPosition(Vector.sum(this.m.getPosition(), this.m.getVelocity()));
  }
}

export { MoveCommand };
