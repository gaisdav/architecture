import { firstCoefficientError, wrongTypeError } from "../../constants";

type TCorrectFixture = {
  testDescription: string;
  value: [number, number, number];
  expectedValue: number[];
};

const correctFixtures: TCorrectFixture[] = [
  {
    testDescription: "discriminant less than zero",
    value: [1, 0, 1],
    expectedValue: [],
  },
  {
    testDescription: "discriminant more than zero",
    value: [1, 0, -1],
    expectedValue: [1, -1],
  },
  {
    testDescription: "discriminant equal to zero",
    value: [1, 2, 1],
    expectedValue: [-1],
  },
];

type TWrongFixture = {
  testDescription: string;
  value: [any, any, any];
  expectedValue: string;
};

const wrongFixtures: TWrongFixture[] = [
  {
    testDescription: "should be error for string type number coefficient",
    value: ["1", 0, 1],
    expectedValue: wrongTypeError,
  },
  {
    testDescription: "should be error for string coefficient",
    value: [1, 0, "string"],
    expectedValue: wrongTypeError,
  },
  {
    testDescription: "should be error for NaN coefficient",
    value: [NaN, 2, 1],
    expectedValue: wrongTypeError,
  },
  {
    testDescription: "should be error for object type number coefficient",
    value: [1, {}, 1],
    expectedValue: wrongTypeError,
  },
  {
    testDescription: "should be error exception for a === 0",
    value: [0, 2, 1],
    expectedValue: firstCoefficientError,
  },
  {
    testDescription: "should be error for a === 0.0",
    value: [0.0, 2, 1],
    expectedValue: firstCoefficientError,
  },
  {
    testDescription: "should be error for a === 0.1e-18",
    value: [0.1e-18, 2, 1],
    expectedValue: firstCoefficientError,
  },
];

export { wrongFixtures, correctFixtures };
