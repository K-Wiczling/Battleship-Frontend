import Validate from "../src/classes/validate";

describe("Check if email is in the correct form", () => {
    test("return true", () => {
      expect(Validate.validateEmail('test@mail.com')).toEqual(output);
    });
    test("return false", () => {
      expect(Validate.validateEmail('wrong input')).toEqual([]);
    });
  }); 