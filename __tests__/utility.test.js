import Validate from "../src/classes/validate.js";

describe("Check if email is in the correct form", () => {
    test("return true", () => {
      expect(Validate.validateEmail('test@mail.com')).toEqual(true);
    });
  });