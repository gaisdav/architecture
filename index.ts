class QuadraticEquation {
  static solve(a: number, b: number, c: number): number[] {
    if (a === 0) {
      throw new Error("a must not be zero");
    }

    const D = b * b - 4 * a * c;

    if (D < 0) {
      return [];
    }

    if (D > 0) {
      const x1 = (-b + Math.sqrt(D)) / (2 * a);
      const x2 = (-b - Math.sqrt(D)) / (2 * a);

      return [x1, x2];
    }

    return [-b / (2 * a)];
  }
}

export { QuadraticEquation };
