import { QuadraticEquation } from "../index";
import { wrongFixtures, correctFixtures } from "./__fixtures__/index.fixture";
import { firstCoefficientError } from "../constants";

describe("quadratic equation", () => {
  describe("success cases", () => {
    correctFixtures.forEach((caseObj) => {
      it(caseObj.testDescription, () => {
        expect(QuadraticEquation.solve(...caseObj.value)).toEqual(
          caseObj.expectedValue
        );
      });
    });
  });

  describe("check non-numeric coefficients", () => {
    wrongFixtures.forEach((caseObj) => {
      it(caseObj.testDescription, () => {
        expect(() => QuadraticEquation.solve(...caseObj.value)).toThrow(
          caseObj.expectedValue
        );
      });
    });
  });

  describe("other error cases", () => {
    it("should be error exception for a === 0", () => {
      expect(() => QuadraticEquation.solve(0, 2, 1)).toThrow(
        firstCoefficientError
      );
    });

    it("should be error exception for a === 0.0", () => {
      expect(() => QuadraticEquation.solve(0.0, 2, 1)).toThrow(
        firstCoefficientError
      );
    });
  });
});
