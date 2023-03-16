import { QuadraticEquation } from "../index";
import { fixture } from "./__fixtures__/index.fixture";

describe("quadratic equation", () => {
  describe("success cases", () => {
    fixture.forEach((caseObj) => {
      it(`test for ${caseObj.value} case`, () => {
        expect(QuadraticEquation.solve(...caseObj.value)).toEqual(
          caseObj.expectedValue
        );
      });
    });
  });

  describe("error cases", () => {
    it("should be error exception for a === 0", () => {
      expect(() => QuadraticEquation.solve(0, 2, 1)).toThrow(
        "a must not be zero"
      );
    });
  });
});
