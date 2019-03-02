// eslint-disable-next-line import/no-extraneous-dependencies
import "jest";
import { isArrayAndNotEmpty } from "./is-array-and-not-empty";

describe("Checks whether a variable's type is an array and has items in it", () => {
    it("should detect none are an array", () => {
        const valuesToTest = [
            "test string",
            "",
            1337,
            -1,
            0,
            {},
            { foo: "bar" },
            true,
            false,
            (): void => {},
        ];
        expect.assertions(valuesToTest.length);

        valuesToTest.forEach((value) => {
            const isAnArray = isArrayAndNotEmpty(value);
            expect(isAnArray).toBe(false);
        });
    });

    it("should detect array is empty", () => {
        const isNotEmpty = isArrayAndNotEmpty([]);
        expect(isNotEmpty).toBe(false);
    });

    it("should detect array is not empty", () => {
        const isNotEmpty = isArrayAndNotEmpty(["test-1", "test-2", "test-3"]);
        expect(isNotEmpty).toBe(true);
    });
});
