// eslint-disable-next-line import/no-extraneous-dependencies
import "jest";
import { isNullOrUndefined } from "./is-null-or-undefined";

describe("Checks whether a variable's value equals null or undefined", () => {
    it("should detect null", () => {
        const nullDetected = isNullOrUndefined(null);
        expect(nullDetected).toBe(true);
    });

    it("should detect undefined", () => {
        const undefinedDetected = isNullOrUndefined(undefined);
        expect(undefinedDetected).toBe(true);
    });

    it("should not detect either", () => {
        const valuesToTest = [
            "test string",
            "",
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
            const nullOrUndefinedDetected = isNullOrUndefined(value);
            expect(nullOrUndefinedDetected).toBe(false);
        });
    });
});
