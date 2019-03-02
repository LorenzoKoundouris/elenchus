// eslint-disable-next-line import/no-extraneous-dependencies
import "jest";
import { isStringAndNotEmpty } from "./is-string-and-not-empty";

describe("Checks whether a variable's type is a string and its value isn't \"\"", () => {
    it("should detect none are a string", () => {
        const valuesToTest = [
            1337,
            -1,
            0,
            [1, 2],
            [],
            {},
            { foo: "bar" },
            true,
            false,
            (): void => {},
        ];
        expect.assertions(valuesToTest.length);

        valuesToTest.forEach((value) => {
            const isAString = isStringAndNotEmpty(value);
            expect(isAString).toBe(false);
        });
    });

    it("should detect string is empty", () => {
        const isNotEmpty = isStringAndNotEmpty("");
        expect(isNotEmpty).toBe(false);
    });

    it("should detect string is not empty", () => {
        const stringTest = "test";
        const isNotEmpty = isStringAndNotEmpty(stringTest);
        expect(isNotEmpty).toBe(true);
    });
});
