import { IRotatable } from "../../interfaces";
import { Rotate } from "../rotate";

describe("Rotate class", () => {
  it("should has correct direction as 300, after updating from 0 to 90 degree with angular velocity as 60", () => {
    const mockObj = {
      direction: 30,
      angularVelocity: 60,
      directionsNumber: 320,
    };

    const Rotatable: IRotatable = {
      getDirection: () => mockObj.direction,
      getAngularVelocity: () => mockObj.angularVelocity,
      getDirectionsNumber: () => mockObj.directionsNumber,
      setDirection: (newD: number) => {
        mockObj.direction = newD;
      },
    };
    const rotate = new Rotate(Rotatable);
    rotate.execute();
    const direction = Rotatable.getDirection();

    expect(direction).toEqual(90);
  });

  it("should has same direction if angular velocity is 0", () => {
    const mockObj = {
      direction: 50,
      angularVelocity: 0,
      directionsNumber: 320,
    };
    const Rotatable: IRotatable = {
      getDirection: () => mockObj.direction,
      getAngularVelocity: () => mockObj.angularVelocity,
      getDirectionsNumber: () => mockObj.directionsNumber,
      setDirection: (newD: number) => {
        mockObj.direction = newD;
      },
    };
    const rotate = new Rotate(Rotatable);
    rotate.execute();
    const direction = Rotatable.getDirection();

    expect(direction).toEqual(mockObj.direction);
  });

  it("should throw error if can't get angular velocity", () => {
    const errorMessage = "Can't read the angular velocity";
    const mockObj = {
      direction: 50,
      angularVelocity: 0,
      directionsNumber: 320,
    };
    const Rotatable: IRotatable = {
      getDirection: () => mockObj.direction,
      getAngularVelocity: () => {
        throw new Error(errorMessage);
      },
      getDirectionsNumber: () => mockObj.directionsNumber,
      setDirection: (newD: number) => {
        mockObj.direction = newD;
      },
    };
    const rotate = new Rotate(Rotatable);

    expect(() => {
      rotate.execute();
    }).toThrow(errorMessage);
  });
});
