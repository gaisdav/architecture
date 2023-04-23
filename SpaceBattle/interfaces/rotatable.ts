interface IRotatable {
  getDirection(): number;
  getAngularVelocity(): number;
  getDirectionsNumber(): number;
  setDirection(newV: number): void;
}

export { IRotatable };
