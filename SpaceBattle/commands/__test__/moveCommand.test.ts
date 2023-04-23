import { IMovable } from "../../interfaces";
import { MoveCommand } from "../moveCommand";
import { Vector } from "../../helpers";

describe("MoveCommand", () => {
  it("should has correct coordinates as 5,8 after updating them from 12,5 with velocity -7,3", () => {
    const mockObj = {
      position: new Vector(12, 5),
      velocity: new Vector(-7, 3),
    };
    const MovableAdapter: IMovable = {
      getPosition: () => mockObj.position,
      getVelocity: () => mockObj.velocity,
      setPosition: (newV: Vector) => {
        mockObj.position = newV;
      },
    };
    const move = new MoveCommand(MovableAdapter);
    move.execute();
    const coords = MovableAdapter.getPosition().getCoords();
    expect(coords).toEqual([5, 8]);
  });

  it("should throw error, if can't get the position", () => {
    const errorMessage = "Can't read the position";

    const mockObj = {
      position: new Vector(12, 5),
      velocity: new Vector(-7, 3),
    };

    const MovableAdapter: IMovable = {
      getPosition: () => {
        throw new Error(errorMessage);
      },
      getVelocity: () => mockObj.velocity,
      setPosition: (newV: Vector) => {
        mockObj.position = newV;
      },
    };

    const move = new MoveCommand(MovableAdapter);

    expect(() => {
      move.execute();
    }).toThrow(errorMessage);
  });

  it("should throw error, if can't get the velocity", () => {
    const errorMessage = "Can't read the velocity";
    const mockObj = {
      position: new Vector(12, 5),
      velocity: new Vector(-7, 3),
    };
    const MovableAdapter: IMovable = {
      getPosition: () => mockObj.position,
      getVelocity: () => {
        throw new Error(errorMessage);
      },
      setPosition: (newV: Vector) => {
        mockObj.position = newV;
      },
    };

    const move = new MoveCommand(MovableAdapter);
    expect(() => {
      move.execute();
    }).toThrow(errorMessage);
  });

  it("should throw error, if can't set the new position", () => {
    const errorMessage = "Can't ser the new position";
    const mockObj = {
      position: new Vector(12, 5),
      velocity: new Vector(-7, 3),
    };
    const MovableAdapter: IMovable = {
      getPosition: () => mockObj.position,
      getVelocity: () => mockObj.velocity,
      setPosition: (newV: Vector) => {
        throw new Error(errorMessage);
      },
    };

    const move = new MoveCommand(MovableAdapter);

    expect(() => {
      move.execute();
    }).toThrow(errorMessage);
  });
});
