import { fn } from "../index";

describe("quadratic equation testing", () => {
  it("test success case", () => {
    expect(fn(1, 2)).toEqual(5);
  });
});
