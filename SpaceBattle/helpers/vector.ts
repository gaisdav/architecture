class Vector {
  private readonly coords: [number, number];

  static sum(x: Vector, y: Vector): Vector {
    const [xp, yp] = x.getCoords();
    const [xd, yd] = y.getCoords();
    return new Vector(xp + xd, yp + yd);
  }

  constructor(x: number, y: number) {
    this.coords = [x, y];
  }

  getCoords(): [number, number] {
    return this.coords;
  }
}

export { Vector };
