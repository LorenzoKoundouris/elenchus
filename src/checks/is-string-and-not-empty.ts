export function isStringAndNotEmpty(valueToCheck: any): boolean {
    return typeof valueToCheck === "string" && valueToCheck !== "";
}