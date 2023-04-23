import { QuadraticEquation } from "../index";
import { wrongFixtures, correctFixtures } from "./__fixtures__/index.fixture";

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

  describe("error cases", () => {
    wrongFixtures.forEach((caseObj) => {
      it(caseObj.testDescription, () => {
        expect(() => QuadraticEquation.solve(...caseObj.value)).toThrow(
          caseObj.expectedValue
        );
      });
    });
  });
});
