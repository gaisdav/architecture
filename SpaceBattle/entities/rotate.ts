import { IRotatable } from "../interfaces";

class Rotate {
  private r: IRotatable;

  constructor(r: IRotatable) {
    this.r = r;
  }

  public execute(): void {
    this.r.setDirection(
      (this.r.getDirection() + this.r.getAngularVelocity()) %
        this.r.getDirectionsNumber()
    );
  }
}

export { Rotate };