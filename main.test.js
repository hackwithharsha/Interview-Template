const intr = require("./main")

describe("intersection", () => {
    test("intersection between [1, 2, 3] and [3, 4]", () => {
      expect(intr([1, 2, 3], [3, 4])).toEqual([ 3 ]);
    });
  });