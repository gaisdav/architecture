import { firstCoefficientError, wrongTypeError } from "./constants";

class QuadraticEquation {
  private static isNotNumberType(...args: any[]): boolean {
    return args.some((item) => typeof item !== "number");
  }

  private static isNaN(...args: number[]): boolean {
    return args.some((item) => isNaN(item));
  }

  static solve(a: number, b: number, c: number): number[] {
    if (this.isNotNumberType(a, b, c) || this.isNaN(a, b, c)) {
      throw new Error(wrongTypeError);
    }

    if (a < Number.EPSILON) {
      throw new Error(firstCoefficientError);
    }

    const D = b * b - 4 * a * c;

    if (D < 0) {
      return [];
    }

    if (D > Number.EPSILON) {
      const x1 = (-b + Math.sqrt(D)) / (2 * a);
      const x2 = (-b - Math.sqrt(D)) / (2 * a);

      return [x1, x2];
    }

    return [-b / (2 * a)];
  }
}

export { QuadraticEquation };
