import { Vector } from "../helpers";

interface IMovable {
  getPosition(): Vector;
  getVelocity(): Vector;
  setPosition(newV: Vector): void;
}

export { IMovable };
