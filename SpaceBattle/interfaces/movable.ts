import { Vector } from "../entities";

interface IMovable {
  getPosition(): Vector;
  getVelocity(): Vector;
  setPosition(newV: Vector): void;
}

export { IMovable };
