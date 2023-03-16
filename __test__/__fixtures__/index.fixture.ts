type TFixture = {
  value: [number, number, number];
  expectedValue: number[];
};

const fixture: TFixture[] = [
  {
    value: [1, 0, 1],
    expectedValue: [],
  },
  {
    value: [1, 0, -1],
    expectedValue: [1, -1],
  },
  {
    value: [1, 2, 1],
    expectedValue: [-1],
  },
];

export { fixture };
