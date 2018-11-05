import { Thing } from "../Thing";

describe("Thing", () => {
  describe("constructor", () => {
    it("defaults name to thing", () => {
      const thing = new Thing();
      expect(thing.name).toEqual("thing");
    });
  });
});
